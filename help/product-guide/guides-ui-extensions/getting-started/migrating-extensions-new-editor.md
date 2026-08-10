---
title: Editor 2.0용 확장 프레임워크 변경 사항 마이그레이션
description: Editor 2.0용 확장 프레임워크로의 마이그레이션에 대해 알아봅니다.
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 75954eab3ac1738705fe2a7280973af39b9214df
workflow-type: tm+mt
source-wordcount: '2006'
ht-degree: 3%

---


# 확장 프레임워크를 편집기 2.0(새 편집기)으로 마이그레이션

이 안내서는 확장 작성자가 AEM Guides에서 **이전 편집기**&#x200B;에서 **새 편집기**(으)로 사용자 지정을 이동하는 데 관련된 내용을 이해하여 원활한 전환을 계획하고 중단을 최소화하는 데 도움이 됩니다.

>[!IMPORTANT]
> 
> 사용자 지정 컨텍스트 메뉴 항목, 도구 모음 단추, 대화 상자, 속성 또는 메타데이터 논리, 컨텐츠 스타일 지정 등 기존 AEM Guides 확장(이전 편집기)이 있는 경우 이 안내서를 사용하여 새 편집기에서 계속 작업할 수 있습니다.

## 개요

- **등록이 변경되지 않습니다**: `window.extension` / `tcx.extension.register`을(를) 계속 사용합니다.
- **편집기 캔버스는 새 표면입니다.** 컨텍스트 메뉴 항목은 새 위젯 ID를 선언해야 합니다.
  `markup_editor_menu`; 편집기에서 DOM 터치를 중지해야 합니다.
- **DOM 읽기/쓰기 중지**: `tcx.curEditor.*` DOM 액세스를 다음으로 바꾸기
  `guides.editor` API: [`runUtil(...)`](#migrate-reads-dom-runutil)(으)로 읽기, [`runCommand(...)`](#migrate-writes-dom-mutation-runcommand)(으)로 쓰기, [장식으로 스타일 지정](#migrate-rendering-only-logic-dom-paint-decorations) 및 [앱 이벤트를 통해 전역 작업(저장) 실행](#migrate-global-actions-savefocus-app-events) .
- **앱 셸 메뉴(저장소, 맵 뷰어, 파일/폴더)가 변경되지 않았습니다**: 여전히 다음에서 실행됩니다.
레거시 프레임워크.
- **두 편집기가 공존합니다**: 두 편집기를 모두 배열로 타깃팅합니다. **Register** 플러그인을 무조건 로드하는 경우, `guides.editor.version`에 의해 *runtime* 작업만 게이트(파일이 열릴 때까지 `1.0.0` 유지)하면 [편집기와 부트스트랩을 안전하게 검색](#detect-the-Editor-and-bootstrap-safely)할 수 있습니다.


## 왜 바뀌는 거죠?

| 기준 | 레거시 CKEditor | 새 MarkupEditor |
|---|---|---|
| Source 오브 트루스 | DOM | ProseMirror 문서 |
| 선택 항목 | 루트 문서의 `getSelection()` | ProseMirror 선택(위치/범위) |
| 콘텐츠를 변경하려면 | DOM 속성/클래스 변경 | 명령 발송(트랜잭션) |
| 렌더링 | DOM은 영구적입니다 | DOM은 그림자 DOM에서 일시적 렌더링으로, 언제든지 다시 빌드됩니다 |
| 스타일링 | 페이지 또는 clientlib CSS | CSS가 레지스터 플러그인을 통해 섀도 DOM을 삽입했습니다. 기존 클래스를 사용하고 CSS를 추가하려면 [Hello world: CSS 전용 강조 표시 플러그인](#hello-world-a-css-only-highlight-plugin)을 참조하고, 새 클래스를 추가하고 스타일을 추가하려면 [렌더링 전용 논리 마이그레이션](#migrate-rendering-only-logic-dom-paint-decorations)을 참조하세요. |

DOM을 변경하는 모든 확장 또는 DOM 변경 사항은 유지되지 않으며 다음 렌더링 시 지워집니다. 마이그레이션은 기본적으로 *DOM에서 모델 우선*(으)로 이동합니다.

## 편집기 및 부트스트랩을 안전하게 감지

전역 `guides` 개체는 모든 새 통합의 진입점입니다.

```js
guides.editor    // editor interaction APIs
guides.util      // bundled utility libs (lodash, async)
guides.ready(cb) // fires once at app load (view system ready) — before any file is open
```

`guides.editor.version`이(가) **현재 열려 있는 편집기**를 보고하므로
파일이 실제로 열려 있습니다.

| `guides.editor.version` | 의미 |
|---|---|
| `2.0.0` | MarkupEditor(ProseMirror) 파일이 열려 있습니다 |
| `1.0.0` | 레거시 CKEditor 파일이 열려 있거나 아직 열려 있는 파일이 없습니다. |

>[!IMPORTANT]
>
> `guides.ready` 이벤트가 발생하면 파일이 아직 열리지 않았으므로 `version`은(는) MarkupEditor의 사용 여부와 관계없이 `1.0.0`(으)로 보고됩니다. `version`을(를) 사용하여 플러그인이 *registered*&#x200B;을(를) 가져오는지 여부를 확인하지 마십시오([플러그인 등록 및 런타임 게이팅](#plugin-registration-and-runtime-gating) 보기). *runtime* 동작을 분기하는 데만 사용하며, 파일이 열려 있는 실행 지점(예: 메뉴 처리기 내)에서 평가합니다.

### 플러그인 등록 및 런타임 게이트

- **등록**(`registerPlugin`, 1회 설정): `guides.ready`에서 **무조건**&#x200B;하세요. 레거시 편집기에서 무해한 no-op입니다. 레거시 편집기는 플러그인 레지스트리를 읽지 않으며 팩토리는 MarkupEditor가 실제로 구성될 때만 실행됩니다. throw가 **not**&#x200B;입니다.

- **런타임 호출**(`runCommand`, `runUtil`, `addDecoration`, ...): 버전별 게이트가 있으며 호출 시 &quot;1.0.0&quot;과(와) 같지 않습니다. 레거시 편집기에서 실행되지 않지만(`false`/`undefined`을(를) 안전하게 반환) 게이팅하면 no-op 경고가 발생하지 않으며 레거시 대체 항목을 유지할 수 있습니다.

```js
guides.ready(() => {
  // Always register — inert on legacy, applied only when a MarkupEditor opens.
  guides.editor.registerPlugin(createMyPlugin);
});

function onMenuClick() {
  if (guides.editor.version && guides.editor.version !== "1.0.0") {
    guides.editor.runCommand('surroundWithElement', 'sup'); // MarkupEditor path
  } else {
    // legacy path (or no-op)
  }
}
```

**팩터리** `() => ({ plugin, css })` — 을(를) `registerPlugin`에 전달합니다. 구성된 플러그인 인스턴스가 아닙니다. 비함수는 거부하는 유일한 입력입니다(두 편집기에서 발생). 편집기 인스턴스를 캐시하지 마십시오. 매번 `guides.editor.*`을(를) 새로 호출하십시오.

### Hello world: CSS 전용 강조 표시 플러그인

가장 작은 유용한 확장 프로그램은 **CSS만**에 no-op ProseMirror 플러그인과 스타일을 제공합니다. 이
편집기 내에서 노란색 배경이 있는 모든 `<note>` 요소를 강조 표시합니다.

```js
guides.ready(() => {
  guides.editor.registerPlugin(() => ({
    plugin: new guides.editor.prosemirror.state.Plugin({}), // no behavior — CSS only
    css: `[data-xml-element="note"] { background: #fff3cd; outline: 1px solid #ffe08a; }`
  }));
});
```

- 모든 요소는 `data-xml-element="<tag>"`(으)로 렌더링되므로 모든 DITA 요소를 이러한 방식으로 타깃팅할 수 있습니다
(`note`, `codeblock`, `section`, `table`, ...)
- CSS **must** registerPlugin을 통해 제공됩니다. 편집기가 섀도 DOM에 있으므로 page/clientlib CSS는
연락해
- `<note>`이(가) 포함된 DITA 주제를 열어 적용합니다. 등록이 무조건적임(§2.1),
따라서 `version`이(가) `guides.ready`에 `1.0.0`인 경우에도 안전합니다.


## 확장 인벤토리 작성(grep 체크리스트)

```bash
# DOM-first reads that will break
grep -rnE "rootDocument|rootElement|getSelection\(|selectedHtml|selectedText|\.xmlDoc|\.ancestors\b" src

# DOM/legacy writes that will break
grep -rnE "updateAttributes\(|setAttribute\(|classList\.|\.saveFile\(|resetDirty\(|validateRangeForInsertion\(" src

# The editor handle itself
grep -rn "tcx.curEditor" src

# Context-menu targeting + page CSS
grep -rnE "contextMenuWidget|dita_editor_menu|author_outline_element" src
grep -rn "dita_content_overrides" .
```

모든 히트는 마이그레이션 항목입니다. 다음 항목으로 분류: *컨텍스트 메뉴 표면*, *상태 읽기*, *콘텐츠
write*, *전역 작업*, *렌더링 전용* 또는 *CSS*.


## 두 편집기의 공통 사항

다음 비헤이비어 및 구조는 두 편집기 모두에 동일하게 적용됩니다.

- **등록:** `window.extension[id] = config` 및/또는 `tcx.extension.register(id, config)`
`tcx-loaded` 이벤트.
- **구성 개체 셰이프:** `{ id, contextMenuWidget, view: { items }, controller }`.
- **앱 셸 컨텍스트 메뉴**&#x200B;는 기존 위젯 ID와 레거시 동작을 유지합니다.

  | 표면 | 위젯 ID(변경되지 않음) |
  |---|---|
  | 저장소 패널(파일/폴더) | `repository_panel` / `file_options` / `folder_options` |
  | 맵 뷰어 | `ditamap_viewer` / `map_view_options` |
  | 기준선 / 사전 설정 패널 | `baseline_panel_menu` / `preset_item_menu` |

  이러한 표면을 타깃팅하는 항목은 새 편집기에 **변경 내용 없음**이 필요합니다. 해당 항목을 다음으로 이동하지 마십시오.
  `markup_editor_menu`.

## API 대체 참조

| 레거시(`tcx.curEditor…`/DOM) | 새 MarkupEditor |
|---|---|
| `tcx.curEditor.filePath` | `guides.editor.filePath` |
| `getSelection()` / `selectedHtml` / `selectedText` | `runUtil('getSelectedXml' / 'getSelectedPlainText' / 'hasSelection')` |
| `rootDocument.querySelector(tag)` | `runUtil('findPositionRange' / 'findPositionRanges', tag)` |
| 요소 `.getAttribute` / `xmlDoc.attributes` | `runUtil('getAttributeAtPosition', pos, name)` / `getSerializableAttributes(xpath)` |
| 루트 id(`querySelector('[concept]').id`) | `runUtil('getAttributeAtPosition', 0, 'id')` |
| `editor.ancestors` | `runUtil('getAncestorsDetails' / 'getAncestorXpaths')` |
| `editor.updateAttributes(attrs, root)` | `runCommand('setNodeXmlAttributes', 0, attrs)` |
| 요소에 attr 설정 | `runCommand('setNodeXmlAttribute', pos, name, value)` |
| 선택 영역 줄바꿈/삽입/줄바꿈 해제 | `runCommand('surroundWithElement' / 'insertXml' / 'unwrapNode', …)` |
| `canInsertXmlElement` / `validateRangeForInsertion` | `canRunCommand(name, …)` / `canInsertXmlElement(tag)` |
| `editor.focus()` | `guides.editor.focus()` |
| `tcx.curEditor.saveFile()` | `tcx.eventHandler.next(KEYS.AUTHOR_SAVE_KEY)` |
| 스타일링용 `setAttribute` / `classList` | `addDecoration` / `batchDecorations` / `registerPlugin` |
| 편집기 콘텐츠용 page/clientlib CSS | `registerPlugin({ css })`(섀도 DOM) |
| `contextMenuWidget: 'dita_editor_menu'` | `['dita_editor_menu', 'markup_editor_menu']` |


## 컨텍스트 메뉴 항목 마이그레이션(편집기 캔버스)

**editor**(`dita_editor_menu`,
`author_outline_element`), 즉 편집 화면 내부의 마우스 오른쪽 버튼 클릭/탐색 표시 메뉴

### 새 편집기에서 라우팅되는 방법

```
window.extension[id]  ─►  filtered by contextMenuWidget == 'markup_editor_menu'
                      ─►  view.items rendered in the canvas menu
   (click) ───────────►  fires an extension event:
                          • eventid is a known global key  → run as a built-in editor command
                          • otherwise                       → your controller[eventid]() runs
```

### 새 위젯 ID 추가(스토리지는 기존 작동 유지)

```js
// BEFORE
contextMenuWidget: 'dita_editor_menu',
// AFTER
contextMenuWidget: ['dita_editor_menu', 'markup_editor_menu'],
```

### 예상되는 모양 유지

- 실행 가능한 항목은 `view.items` 아래에 있으며 `data.eventid`이(가) 있습니다.
- 각 `controller` 메서드 이름은 **해당 `eventid`과(와) 정확히 일치**&#x200B;합니다.

```js
view: {
  items: [{
    displayName: 'Edit Cross Reference',
    icon: 'link',
    data: { eventid: 'editCrossReference' },
    target: { key: 'displayName', value: 'Cut', viewState: 'prepend' }
  }]
},
controller: {
  editCrossReference() { /* runs on click */ }
}
```

### `target` 다시 연결

새 메뉴는 MarkupEditor의 메뉴 항목에 대해 `target`을(를) 확인합니다.

- `target.key`: `displayName | id | icon | eventid`
- `target.viewState`: `append | prepend | replace`
- **`Cut`**&#x200B;과(와) 같은 안정적인 기본 항목에 고정합니다.
- 앵커가 해결되지 않으면 항목이 여전히 표시되지만 기본 위치에 놓입니다
(오류 아님, 앵커를 고정).

### 품목별 공정순서 선택

```js
data: { eventid: 'AUTHOR_CUT' }          // built-in command → routed natively, no controller needed
data: { eventid: 'editCrossReference' }  // custom → runs controller.editCrossReference()
```

읽기 전용 콘텐츠에서 활성화되어야 하는 항목에 `readOnly: true`을(를) 추가합니다.

### 핸들러 본문 다시 작성

처리기는 일반적으로 선택 항목을 읽고 노드를 변경하여 DOM에서 마이그레이션합니다.

## 읽기 마이그레이션(DOM: `runUtil`)

```js
// BEFORE — DOM selection / queries
const { editor } = tcx.curEditor;
const html = editor.selectedHtml;
const topicId = editor.rootDocument.querySelector('[data-tcx-tag="concept"]').id;

// AFTER — read from the document model
const selectedXml = guides.editor.runUtil('getSelectedXml');
const hasSel      = !!guides.editor.runUtil('hasSelection'); // check if selection is empty
const topicId     = guides.editor.runUtil('getAttributeAtPosition', 0, 'id'); // root = position 0
```

태그로 노드를 찾고, ID로 일치시키고, XML 속성을 읽습니다.

```js
let value = '';
for (const range of (guides.editor.runUtil('findPositionRanges', 'xref') || [])) {
  const id = guides.editor.runUtil('getAttributeAtPosition', range.from, 'id');
  if (String(id) !== String(targetId)) continue;
  value = guides.editor.runUtil('getAttributeAtPosition', range.from, 'placeholdertext') || '';
  break;
}
```

**유틸리티 읽기:** `getTextPos`, `getNodePosition`, `getSelectedXml`, `getSelectedPlainText`,
`hasSelection`, `getAncestorsNames`, `getAncestorsDetails`, `getAncestorXpaths`,
`findPositionRange`, `findPositionRanges`, `getAttributeAtPosition`, `getSerializableAttributes`. [부록](#appendix-a-more-exposed-utils-examples)을 참조하세요.


## 쓰기 마이그레이션(DOM 돌연변이: `runCommand`)

```js
// BEFORE
const root = editor.rootElement.findOne('[data-tcx-tag="concept"]');
editor.updateAttributes({ docOwner: 'Jane' }, root);

// AFTER — update the model; persists across rerenders
guides.editor.runCommand('setNodeXmlAttributes', 0, { docOwner: 'Jane' });
```

```js
// Set one attribute at a found position
guides.editor.runCommand('setNodeXmlAttribute', pos, 'placeholdertext', text);

// Wrap / insert / unwrap
guides.editor.runCommand('surroundWithElement', 'sup');
guides.editor.runCommand('insertXml', '<sup></sup>', undefined, { setCursorInContent: true });
guides.editor.runCommand('unwrapNode');
```

**전제 조건**

```js
guides.editor.focus();
if (!guides.editor.canInsertXmlElement('xref')) {
  return tcx.util.showAlert('warning', 'xref is not allowed here'); 
}
if (guides.editor.canRunCommand('surroundWithElement', 'sup')) {
  guides.editor.runCommand('surroundWithElement', 'sup');
}
```

**명령:** `setNodeXmlAttributes`, `setNodeXmlAttribute`, `surroundWithElement`, `insertXml`,
`unwrapNode`. [부록](#appendix-b-more-exposed-commands-examples)을 참조하세요.

## 전역 작업 마이그레이션(저장/포커스: 앱 이벤트)

```js
// BEFORE
tcx.curEditor?.saveFile?.();
// AFTER
tcx.eventHandler.next(tcx.eventHandler.KEYS.AUTHOR_SAVE_KEY);
```

`resetDirty(...)` 및 `tcx.curEditor.html`에 해당하는 MarkupEditor가 없으므로 삭제하십시오. 저장
이벤트를 통해 중앙에서 더러운 상태를 처리합니다. 포커스에 `guides.editor.focus()`을(를) 사용합니다.


## 렌더링 전용 로직 마이그레이션(DOM 페인트: 장식)

DOM을 변경하여 CSS 클래스, `data-*` 특성 또는 &quot;텍스트 표시&quot;를 추가한 모든 항목은
**장식**&#x200B;이 되거나 다시 렌더링할 때 사라집니다. 다음은 간단한 선언적 사례입니다.

```js
guides.editor.addDecoration('important-sections', 'section', {
  class: 'section-important',
  computeAttributes: (node, ctx) => ({ 'data-number-label': String(ctx.index + 1) }),
  filter: (node) => node.attrs?.xmlAttrs?.importance === 'high'
});

guides.editor.batchDecorations([
  { action: 'remove', id: 'legacy-numbering' },
  { action: 'add', id: 'division-numbering', selector: 'conbody', options: { class: 'division-numbering' } }
]);

guides.editor.removeDecoration('important-sections');
guides.editor.clearDecorations();
guides.editor.getDecorations();
```

복잡한 사례(사용자 정의 상태, 트랜잭션 메타, 위젯 텍스트를 통한 중단 상태): 등록
노출된 라이브러리를 사용하여 ProseMirror 플러그인 한 번 사용:

```js
const createXrefPlugin = () => {
  const { Plugin, PluginKey } = guides.editor.prosemirror.state;
  const { Decoration, DecorationSet } = guides.editor.prosemirror.view;
  return {
    plugin: new Plugin({ key: new PluginKey('xrefDisplay'), props: { decorations(state) { /* … */ } } }),
    css: `.xref-broken { text-decoration: underline wavy red; }`
  };
};

guides.ready(() => guides.editor.registerPlugin(createXrefPlugin));
```

대화 상자 내부가 아닌 앱 로드 시(한 번) 플러그인을 등록하거나 반복적으로 레지스트리가 중복 제거되지 않습니다. `registerPlugin`은(는) 플러그 인 인스턴스가 아닌 **팩터리 함수만**을(를) 허용합니다.
`guides.editor.prosemirror` 노출 횟수: `state`, `model`, `view`, `transform`, `commands`, `keymap`,
`history`, `tables`, `dropcursor`, `collab`, `markdown`.


## CSS 마이그레이션(page clientlib → shadow DOM)

MarkupEditor가 **섀도 DOM** 내에서 렌더링됩니다. 페이지 수준 및 AEM clientlib CSS가 여기에 도달하지 않습니다.

```js
guides.editor.registerPlugin(() => ({
  plugin: new guides.editor.prosemirror.state.Plugin({}),   // no-op, CSS only
  css: `[data-xml-element="codeblock"] { font-family: monospace; background: #f5f5f5; }`
}));
```

레거시 콘텐츠 clientlib 범주(`apps.guides.xml_editor.dita_content_overrides`)가 여전히 있음
레거시 편집기에만 스타일을 지정하며, 둘 다 지원하는 경우에는 유지하지만 MarkupEditor에서는 비활성화되어 있음을 알고 있습니다.

## 라이브 EditorView 액세스(플러그인 `view` prop): DOM 이스케이프 해치

장식과 명령이 선호되는 접근법이다. 그러나 일부 효과는 장식으로 구현되지 않습니다. 이러한 경우 플러그인 `view` 속성을 사용하여 라이브 `EditorView`에 액세스하고 `editorView.dom`에서 작동합니다. 이는 렌더링된 편집기 DOM과 직접 상호 작용하는 유일한 방법입니다.

```js
const createMyPlugin = () => {
  const { Plugin } = guides.editor.prosemirror.state;
  return {
    plugin: new Plugin({
      view(editorView) {
        const root = editorView.dom;          // the shadow-DOM editor node
        const apply = () => { /* re-color / rewrite target nodes in `root` */ };
        apply();
        return {
          update(view, prevState): apply,                       // re-apply after every rerender
          destroy() { /* remove any listeners/observers */ },
        };
      },
    }),
    css: `/* ... */`,
  };
};

guides.ready(() => guides.editor.registerPlugin(createMyPlugin));
```

**보호 기능**:

- 해치만 이스케이프 처리하고, 클래스, 레이블 및 스타일링에 장식을 사용합니다.
- `editorView.dom`은(는) 유일하게 지원되는 핸들입니다.
- 변경 내용이 다시 렌더링되도록 `update()`에서 다시 적용합니다. `destroy()`에서 정리합니다.

## 플러그인 등록 라이프사이클

`guides.ready`의 `registerPlugin`은(는) 팩토리를 한 번만 등록합니다. 공장 자체가 다시 가동된다
파일을 열 때마다 — 열려 있는 모든 MarkupEditor 파일이 해당 파일을 새로 빌드하도록 호출합니다.
플러그인 인스턴스.

## 일반적인 문제

- DOM 코드가 노드 및 `Range`을(를) 지정하는 경우 MarkupEditor는 문서에 인덱싱하는 **위치**, 일반 정수를 지정합니다(`0` = 문서 시작, 즉 루트). `range`은(는) DOM `Range`이(가) 아닌 범위 경계를 이루는 두 개의 위치인 `{ from, to }`입니다. 문서가 변경될 때 위치가 이동하므로 편집기에서 캐시하지 마십시오.
- **항목이 새 편집기 메뉴에 나타나지 않습니다**: `contextMenuWidget`이(가) 없습니다.
  `markup_editor_menu` 또는 구성이 *after*에 등록되었습니다. 편집기가 열렸습니다(구성을 읽음).
  한 번(앱 로드 시 편집기 구성 등록).
- **항목이 잘못된 위치에 나타남**: `target` 앵커가 확인되지 않습니다.
이(가) 새 메뉴에 있습니다(예: `Cut`).
- **변경 &quot;작동&quot; 후 사라짐**: DOM을 변경했습니다. 명령(쓰기) 또는 데코레이션 사용
(스타일) 을 사용하십시오.
- **CSS에 효과가 없습니다**: 페이지 수준이며 편집기가 섀도 DOM에 있습니다. `registerPlugin({ css })` 사용.
- **안전하지 않은 보호기 throw**: `if (!tcx.curEditor && !tcx.curEditor.editor)`과(와) 같은 패턴은 평가됩니다.
  `.editor`이(가) 잘못된 개체에 있습니다. 대신 `guides.editor` 기능 보호:
  `if (!guides?.editor) return;`.
- **앱 셸 메뉴를 마이그레이션하려고 합니다**: 저장소/맵/파일 메뉴는 편집기 캔버스가 아닙니다.
기존 위젯 id에 그대로 둡니다.

## 확인 검사 목록

- 컨텍스트 메뉴 항목이 기존 및 MarkupEditor 메뉴의 **둘 다**&#x200B;에 나타납니다.
- 항목이 예상 위치에 도달합니다.
- 사용자 지정 `eventid`은(는) `controller[eventid]`을(를) 실행합니다. 전역 키는 기본 제공 명령을 실행합니다.
- 입력/렌더링 후 상태 읽기는 올바른 값을 반환합니다(부실 DOM이 아닌 모델).
- 콘텐츠 쓰기 *저장 후 다시 열기* 후에 유지됩니다.
- 장식은 고쳐 쓸 수 있다.
- Shadow-DOM CSS는 편집기 내에 시각적으로 적용됩니다.
- `AUTHOR_SAVE_KEY`을(를) 통해 실행을 저장하고 더티 상태를 지웁니다.
- `readOnly`개 항목이 잠긴 콘텐츠에서 올바르게 동작합니다.
- 미리 보거나 나란히 표시하십시오. 의도적인 읽기 전용 DOM 작업은 그대로 유지됩니다.
- `grep -rn "tcx.curEditor" src`이(가) 깨끗합니다(또는 문서화된 의도적인 나머지 항목만).
- 플러그인이 `guides.ready` 내에서 정확히 한 번 등록되었습니다.


## 제안된 롤아웃 시퀀스

1. **Bootstrap**: `guides.ready`에서 설정을 래핑하고, 플러그인을 무조건 등록하고 *런타임* 작업에만 `version` 게이트(자세한 내용은 [플러그인 등록 및 런타임 게이트](#plugin-registration-and-runtime-gating))를 추가하십시오.
2. **컨텍스트 메뉴 표면**: `markup_editor_menu`을(를) 추가하고 `target`개의 앵커를 수정하십시오. 이제 항목이 표시됩니다.
3. **읽기**: 선택/특성 읽기를 `runUtil`(으)로 마이그레이션합니다.
4. **쓰기**: 돌연변이를 `runCommand`(으)로 마이그레이션합니다. 앱 이벤트에 저장합니다.
5. **렌더링**: DOM 스타일을 장식으로 이동 / `registerPlugin`; CSS를 섀도 DOM으로 이동.
6. **Harden**: 안전하지 않은 가드를 수정하고 편집기 핸들을 제거한 다음 두 편집기에서 확인하십시오.

한 번에 하나의 표면을 마이그레이션하고 기존 경로를 계속 작동(배열 + 버전 게이트)시켜
단일 확장 빌드는 전환 전체에서 두 편집기 모두에서 실행됩니다.

## 부록 A: 추가 노출된 유틸리티(예)

`runUtil`을(를) 통해 사용할 아래 유틸리티를 찾으십시오.

| 유틸리티 | 매개 변수 → 반환 | 설명 |
|---|---|---|
| `getTextPos` | `(): { start, end }` | 현재 선택한 텍스트 노드 경계 |
| `getValidElementNames` | `(ancestorLevel?): ElementName[]` | 현재 선택 항목에서 법적으로 삽입/래핑할 수 있는 요소 이름입니다. |
| `getValidElementNamesBefore` | `(): ElementName[]` | 현재 선택 항목 바로 앞에 요소 이름이 유효합니다. |
| `getSelectedText` | `(): string` | 원시 선택 텍스트입니다. |
| `getSerializableAttributes` | `(): { [key]: string }` | 특성 이름으로 처리된 현재 노드의 XML 특성 맵입니다. |
| `getTagName` | `(): string \| null` | 현재 노드의 태그 이름입니다. |
| `hasSelection` | `(): boolean` | 현재 선택된 컨텐츠가 있는지 여부. |
| `isSelectionEditable` | `(): boolean` | 현재 선택 항목을 편집할 수 있는지 여부입니다. |
| `getAncestorPos` | `(name): number \| undefined` | 현재 선택 항목에서 지정된 요소 이름으로 가장 가까운 상위 항목의 위치입니다. |
| `getValidWrapNodeElementNames` | `(): ElementName[]` | 현재 선택 항목의 `wrapNode`에 대해 유효한 요소 이름. |
| `getValidRenameNodeElementNames` | `(): ElementName[]` | 현재 노드의 이름을 법적으로 로 바꿀 수 있는 요소 이름입니다. |
| `getValidSurroundElementNames` | `(): ElementName[]` | 현재 선택 항목의 `surroundWithElement`에 대해 유효한 요소 이름. |
| `serialize` | `(doc?): string` | ProseMirror 문서(또는 전체 문서)를 XML로 일련화합니다. |
| `getSelectedXml` | `(range?): string` | 현재 선택 영역에 대한 XML 또는 명시적 `{ from, to }` 범위입니다. |
| `getRangeXml` | `(xpaths): string` | 하나 이상의 xpath-object 범위에 대한 XML(§8의 xpath 주의 사항 참조 - 문자열 양식이 아닌 개체 양식). |
| `mapToXpath` | `(position, doc?): XPathPosition` | 위치를 개체 형식의 xpath로 변환합니다. |
| `inverseMap` | `(xpath \| position, doc?): number` | 오브젝트 양식 xpath(또는 위치)를 다시 위치로 변환합니다. |
| `getAncestorsDetails` | `(): { ancestors, previousSibling, nextSibling, currNode } \| undefined` | 현재 노드의 조상 체인과 바로 위 형제자매입니다. |
| `getAncestorsNames` | `(): ElementName[]` | 현재 노드의 경우 요소 이름으로만 상위 체인이 사용됩니다. |
| `getPreviousSibling` | `(): ElementName \| undefined` | 이전 형제 요소의 이름입니다. |
| `getNextSibling` | `(): ElementName \| undefined` | 다음 형제 요소의 이름입니다. |
| `getAncestorXpaths` | `(includeNodeAtPosition?): { tag, xpath }[]` | `{tag, xpath}` 쌍으로서의 상위 체인 — `updateAttributeByXpath` 문자열 형식(§8)이 아닌 개체 형식의 xpath입니다. |
| `getSelectedPlainText` | `(range?): string` | 현재 선택 항목의 일반 텍스트 또는 명시적 범위입니다. |
| `getDecorations` | `(): string[]` | 현재 적용된 모든 장식의 ID. |
| `getResolvedDitaDocumentTitle` | `(props?): string` | DITA 문서의 표시 제목을 해결했습니다. `props`: `doc`(특정 문서를 대상으로 지정), `allowedPrefixElements`(제목 접두사 요소 허용). |

## 부록 B: 노출된 명령 더 보기(예)

아래 명령은 `guides.editor.runCommand(name, ...args)`을(를) 통해 노출된 내용에 대한 추가적인 예입니다.
현재 컨텍스트에서 적용되지 않을 수 있는 경우 `guides.editor.canRunCommand(name, ...args)`을(를) 사용하여 명령을 먼저 보호하십시오.

| 명령 | 매개 변수 | 설명 |
|---|---|---|
| `focusEditor` | `()` | 편집기에 초점을 맞춥니다. |
| `unwrapNode` | `()` | 현재 선택 영역에서 자식 요소를 유지하면서 줄바꿈 요소를 제거합니다. |
| `surroundWithElement` | `(elementName, attrs?, groupInline?)` | 현재 선택 항목을 새 인라인/블록 요소에 래핑합니다. `attrs`: 새 래핑 요소에 설정할 XML 특성 맵입니다. |
| `insertXml` | `(xml)` | 커서에 XML 조각을 삽입합니다. |
| `replaceSelectionWithXml` | `(xml)` | 현재 선택 영역을 XML로 바꿉니다. |
| `insertText` | `(text)` | 커서에 일반 텍스트를 삽입합니다. |
| `selectNodesFromXpaths` | `(xpaths)` | 지정된 객체 양식 xpath에 있는 노드를 한 개 이상 선택합니다. |
| `delete` | `()` | 현재 선택 항목을 삭제합니다. |
| `undo` / `redo` | `()` | 표준 실행 취소/다시 실행. |
| `removeDecoration` | `(id)` | ID별로 단일 장식을 제거합니다. |
| `clearDecorations` | `()` | 현재 열려 있는 파일의 모든 장식을 제거합니다. |
| `setFileReadOnly` | `(readOnly: boolean)` | 파일에 대한 읽기 전용 모드를 전환합니다. |
| `generateUniqueId` | `()` | 고유한 ID 속성을 생성하여 현재 노드에 할당합니다. |