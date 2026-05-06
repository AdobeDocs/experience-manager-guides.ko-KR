---
title: Editor 2.0용 확장 프레임워크 변경 사항
description: Editor 2.0용 확장 프레임워크의 변경 사항에 대해 알아봅니다.
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 3f38264b6ce09366d07cdd302c9c53e8abcf4b7c
workflow-type: tm+mt
source-wordcount: '2003'
ht-degree: 3%

---

# Editor 2.0(새 편집기)의 확장 프레임워크 변경 사항

이 문서에서는 새 편집기(ProseMirror 기반 편집기)의 확장 프레임워크의 일부로 `guides.editor`(및 `guides`)에 추가된 모든 API를 다룹니다. 이러한 API를 사용하면 직접 DOM 조작이나 내부 구현 지식 없이 외부 확장이 편집기와 상호 작용할 수 있습니다.

## 개요

전역 `guides` 개체는 모든 확장 통합의 진입점입니다.

```js
guides.editor    // Editor interaction APIs
guides.util      // Utility libraries (lodash, async)
guides.ready(cb) // Lifecycle hook fires when the editor is fully loaded
```

모든 `guides.editor` API는 확장 컨트롤러, 도구 모음 처리기 및 대화 상자 논리에서 호출해도 안전합니다.

## 라이프사이클

`guides.ready(callback)`: 페이지 보기 관리자가 완전히 로드되면 실행할 콜백을 등록합니다. 플러그인을 등록하거나 편집기 설정을 수행하기 전에 이 방법을 사용하십시오.

**서명:**

```ts
guides.ready(callback: () => void): void
```

**예:**

```js
guides.ready(() => {
  // Safe to access guides.editor APIs here
  guides.editor.registerPlugin(createMyPlugin);
});
```

## 편집기 상태 속성

- `guides.editor.filePath`: 현재 활성 문서의 파일 경로를 반환합니다.

  **유형:** `string | undefined`

  **예: 메타데이터 API 호출에 대한 파일 경로를 읽는 중:**

  ```js
  const filePath = guides.editor.filePath;
  if (filePath) {
  tcx.api.getMetadata(filePath).subscribe((metadata) => {
    // use metadata...
    });
  }
  ```

  **예: 파일 위치를 기반으로 하는 조건부 논리**

  ```js
  const filePath = guides.editor.filePath;
  if (filePath?.endsWith(".ditamap")) {
    // ditamap-specific handling
  }
  ```

- `guides.editor.version`: 현재 로드된 편집기의 버전 문자열을 반환합니다.

  | 값 | 편집기 |
  |---------|------------------------------------|
  | `1.0.0` | 레거시 CKEditor(`xml_author_view`) |
  | `2.0.0` | 새 편집기(ProseMirror 기반) |

  **유형:** `string`

  **예:**

  ```js
  if (guides.editor.version  === '1.0.0') {
    // CKEditor specific logic 
  }
  ```

- `guides.editor.appState(keyName)`: 응용 프로그램 모델에서 키 이름별로 값을 읽습니다.

  **서명:**

  ```ts
  guides.editor.appState(keyName: string): unknown
  ```

  **예:**

  ```js
  const editorMode = guides.editor.appState('editorMode');
  ```

## 편집자 상호 작용

- `guides.editor.focus()`: 포커스를 활성 편집기로 설정합니다. 편집기에 포커스가 있어야 하는 명령을 실행하기 전에 이를 호출하십시오.

  **서명:**

  ```ts
  guides.editor.focus(): boolean
  ```

  **예: 콘텐츠를 삽입하기 전에 포커스**

  ```js
  guides.editor.focus();
  const hasSelection = !!guides.editor.runUtil('hasSelection');
  // ...proceed with wrap or insert
  ```

- `guides.editor.canInsertXmlElement(tagName, insertAfter?)`: 특정 XML 요소를 현재 커서 위치에 삽입할 수 있는지 확인합니다.

  **서명:**

  ```ts
  guides.editor.canInsertXmlElement(tagName: string, insertAfter?: boolean): boolean
  ```

  **예:`<xref>`**&#x200B;을(를) 삽입하기 전에 보호

  ```js
  const canInsert = guides.editor.canInsertXmlElement("xref");
  if (!canInsert) {
    return tcx.util.showAlert("warning", "xref is not allowed here");
  }
  ```

  **예: `<sup>`/`<sub>`**&#x200B;을(를) 삽입하기 전에 보호

  ```js
  const canInsert = guides.editor.canInsertXmlElement("sup");
  if (!canInsert) {
    return tcx.util.showAlert("warning", "superscript is not allowed here");
  }
  ```

- `guides.editor.selectCurrentBlockElement()`: 편집기에서 현재 블록 수준 요소를 선택합니다.

  **서명:**

  ```ts
  guides.editor.selectCurrentBlockElement(): boolean
  ```

  **예:**

  ```js
  guides.editor.selectCurrentBlockElement();
  ```

- `guides.editor.getValidElementNamesForInsertion(args)`: 현재 위치에 삽입할 수 있는 올바른 XML 요소 이름 목록을 반환합니다.

  **서명:**

  ```ts
  guides.editor.getValidElementNamesForInsertion(args: {
    insertMode?: 'after' | 'before' | 'rename',
    strict: boolean
  }): string[] | false
  ```

  **예:**

  ```js
  const validElements = guides.editor.getValidElementNamesForInsertion({
    insertMode: 'after',
    strict: true
  });
  ```

- `guides.editor.updateAttributeByXpath(args)`: 해당 XPath로 식별된 노드의 특정 XML 특성을 업데이트합니다. 활성 편집기의 `updateAttributeByXpath` 메서드에 대한 대리자입니다.

  **서명:**

  ```ts
  guides.editor.updateAttributeByXpath(args: UpdateXpathArgs): any
  ```

## 명령 실행

- `guides.editor.runCommand(commandName, ...args)`: 새 편집기에서 명명된 명령을 실행합니다. 명령이 성공하면 `true`을(를) 반환하고 그렇지 않으면 `false`을(를) 반환합니다.

  **서명:**

  ```ts
  guides.editor.runCommand(commandName: string, ...args: any[]): boolean
  ```

  **사용 가능한 명령**

  >[!NOTE]
  >
  > 안정성: 아래 나열된 명령은 공용 인터페이스의 일부입니다. 이들의 이름, 서명, 관찰할 수 있는 행동은 안정적이라고 간주되어 호환성을 위해 유지된다. 편집기 내에 추가 명령이 있을 수 있지만, 이는 내부용이며 외부 사용을 위한 것이 아니며, 사전 통지 없이 변경되거나 제거될 수 있습니다.

  | 범주 | 명령 | 인수 | 설명 |
  |---|---|---|---|
  | 일반 | `undo` | _(없음)_ | 마지막 문서 변경 실행 취소 |
  | 일반 | `redo` | _(없음)_ | 마지막으로 실행 취소한 변경 내용을 다시 실행합니다. |
  | 선택 항목 | `select` | `from: number, to?: number` | `from`에서 `to` 사이의 범위를 선택합니다(또는 `to`을(를) 생략하는 경우 `from`만). |
  | 선택 항목 | `cursor` | `pos: number` | 커서를 `pos`(으)로 이동 |
  | 선택 항목 | `selectNodesFromXpaths` | `xpaths: Array<{path: Array<{name: string, count: number}>}>` | XPath 위치로 식별된 노드 선택 |
  | 서식 | `toggleBold` | _(없음)_ | 현재 선택 영역에서 굵게 서식 설정/해제 |
  | 서식 | `toggleItalic` | _(없음)_ | 현재 선택 영역에서 기울임꼴 서식 설정/해제 |
  | 서식 | `toggleUnderline` | _(없음)_ | 현재 선택 영역에서 밑줄 서식 설정/해제 |
  | 서식 | `toggleFormatting` | `markType: string, allowEmptySelection?: boolean` | 선택 항목에서 서식 요소(예: `'b'`, `'i'`, `'sup'`, `'sub'`) 전환 |
  | 삽입 | `insertText` | `text: string` | 커서에 일반 텍스트를 삽입합니다. |
  | 삽입 | `insertXml` | `xml: string, position?: number, options?: InsertXmlOptions` | 커서 또는 지정된 위치에 원시 XML을 삽입합니다. |
  | 삽입 | `insertXmlAfterElement` | `elementName: string, xmlString: string` | 가장 가까운 상위 항목 `elementName` 바로 뒤에 XML을 삽입합니다. |
  | 삽입 | `replaceSelectionWithXml` | `xmlString: string` | 현재 선택 항목을 지정된 XML로 바꿉니다. |
  | 노드 작업 | `surroundWithElement` | `tagName: string, attrs?: Record<string,unknown>, replaceTextWithEmptyNode?: boolean` | 현재 선택 영역을 지정된 요소로 래핑 |
  | 노드 작업 | `wrapNode` | `type: string, target?: number, attrs?: Record<string, unknown>` | `type`의 요소에서 `target`(또는 현재 노드)의 노드를 래핑합니다. |
  | 노드 작업 | `renameNode` | `newNodeName: string` | 현재 노드의 요소 이름을 바꿉니다. |
  | 노드 작업 | `unwrapNode` | _(없음)_ | 현재 노드의 래퍼 요소를 제거하고 해당 콘텐츠를 유지합니다. |
  | 삭제 | `deleteSelection` | _(없음)_ | 현재 선택된 콘텐츠 삭제 |
  | 삭제 | `deleteNode` | _(없음)_ | 현재 노드 전체를 삭제합니다. |
  | 속성 | `setNodeXmlAttributes` | `position: number, attrs: Record<string, unknown>` | `position`의 노드에서 여러 XML 특성을 설정합니다. |
  | 속성 | `setNodeXmlAttribute` | `position: number, attrName: string, value: string` | `position`에 있는 노드의 단일 XML 특성을 설정합니다. |
  | 목록 | `toggleList` | `listName: 'ol' \| 'ul'` | 특정 형식의 목록과 단락 간에 현재 블록을 전환합니다. |
  | 표 | `addRowAfter` | `count?: number` | 현재 행 아래에 `count`개 행 추가(기본값 1) |
  | 표 | `addColumnAfter` | `count?: number` | 현재 열 오른쪽에 `count`개 열 추가(기본값 1) |
  | 표 | `deleteRow` | _(없음)_ | 현재 행을 삭제합니다. |
  | 표 | `deleteColumn` | _(없음)_ | 현재 열을 삭제합니다. |
  | 표 | `mergeCells` | _(없음)_ | 현재 선택한 셀을 병합합니다. |
  | 클립보드 | `copy` | _(없음)_ | 현재 선택 영역을 클립보드에 복사합니다. |
  | 클립보드 | `cut` | _(없음)_ | 현재 선택 영역을 클립보드로 잘라냅니다. |
  | 찾기 및 바꾸기 | `setSearchQuery` | `query: string, options?: { caseSensitive?: boolean, regex?: boolean }` | 활성 검색 쿼리를 설정합니다. |
  | 찾기 및 바꾸기 | `findNext` | _(없음)_ | 다음 검색 일치로 이동 |
  | 찾기 및 바꾸기 | `replaceAll` | `replacement?: string` | 현재 검색 쿼리의 모든 일치 항목을 `replacement`(으)로 바꾸기 |

   - **예: 노드에 여러 특성을 설정합니다**

     ```js
     guides.editor.runCommand(
       "setNodeXmlAttributes",
       rootRange.from,
       { createdDate: "2024-01-01", author: "Jane Doe" }
     );
     ```

   - **예: 노드에서 단일 특성 설정**

     ```js
     guides.editor.runCommand(
       "setNodeXmlAttribute",
       range.from,
       "placeholdertext",
       "Chapter 3 — Safety Requirements"
     );
     ```

   - **예: 요소를 사용하여 선택 항목을 래핑하고 특성을 설정합니다**

     ```js
     const didWrap = guides.editor.runCommand(
       "surroundWithElement",
       "ph",
       { outputclass: "highlight" },
       true   // replace text content with empty node
     );
     ```

   - **예: `<sup>`에서 선택 항목 줄바꿈(위 첨자 켜기 전환)**

     ```js
     const didWrap = guides.editor.runCommand('surroundWithElement', 'sup');
     if (!didWrap) {
       tcx.util.showAlert("warning", "superscript is not allowed here");
     }
     ```

   - **예: 현재 노드의 줄바꿈 해제(위 첨자 해제 전환)**

     ```js
     const didUnwrap = guides.editor.runCommand('unwrapNode');
     ```

   - **예: 캐럿을 내부에 배치한 채 커서에 XML 삽입**

     ```js
     guides.editor.runCommand(
       'insertXml',
       '<sup></sup>',
       undefined,
       { setCursorInContent: true, focusEditor: true, selectInsertedXml: false }
     );
     ```

- `guides.editor.canRunCommand(commandName, ...args)`: 명명된 명령을 실제로 실행하지 않고 현재 실행할 수 있는지 확인합니다.

  **서명:**

  ```ts
  guides.editor.canRunCommand(commandName: string, ...args: any[]): boolean
  ```

  **예:**

  ```js
  if (guides.editor.canRunCommand('surroundWithElement', 'sup')) {
    guides.editor.runCommand('surroundWithElement', 'sup');
  }
  ```

## 유틸리티 함수

- `guides.editor.runUtil(utilName, ...args)`: 새 편집기의 유틸리티 레지스트리에서 명명된 유틸리티를 호출합니다. 유틸리티의 결과를 반환하거나 유틸리티를 찾을 수 없는 경우 `undefined`을(를) 반환합니다.

  **서명:**

  ```ts
  guides.editor.runUtil(utilName: string, ...args: any[]): any
  ```

  **사용 가능한 유틸리티**

  >[!NOTE]
  >
  > 안정성: 아래 나열된 유틸리티는 공용 인터페이스의 일부입니다. 이들의 이름, 서명, 관찰할 수 있는 행동은 안정적이라고 간주되어 호환성을 위해 유지된다. 편집기 내에 추가 명령이 있을 수 있지만, 이는 내부용이며 외부 사용을 위한 것이 아니며, 사전 통지 없이 변경되거나 제거될 수 있습니다.


  | 범주 | 유틸리티 | 인수 | 반환 | 설명 |
  |---|---|---|---|---|
  | 위치 | `getTextPos` | _(없음)_ | `{ start: number, end: number }` | ProseMirror 문서에서 현재 선택 항목의 시작 및 끝 위치 |
  | 위치 | `getNodePosition` | `position?: number` | `number` | 현재 선택한/포커스가 있는 노드의 문서 위치 |
  | 위치 | `mapToXpath` | `position: number` | `XPathPosition` | ProseMirror 위치를 XPath 설명자에 매핑 |
  | 위치 | `inverseMap` | `xpath: XPathPosition \| number` | `number` | XPath 설명자(또는 숫자 위치)를 ProseMirror 위치에 다시 매핑합니다. |
  | 문서 | `getNodeTree` | _(없음)_ | `NodeTree \| null` | 개요 렌더링에 적합한 문서의 트리 표현 |
  | 문서 | `getAncestorsNames` | `position?: number` | `string[]` | `position`에 있는 상위 노드의 XML 태그 이름 |
  | 문서 | `getAncestorsDetails` | `position?: number` | `{ currNode: string, ancestors: Array<{tagName: string}>, previousSibling?: string, nextSibling?: string } \| undefined` | `position`의 현재 노드, 상위 멤버 및 바로 아래 형제 |
  | 문서 | `getAncestorXpaths` | `includeId?: boolean` | `AncestorXpathItem[]` | 모든 상위 노드에 대한 XPath 문자열 |
  | 문서 | `getPreviousSibling` | `position?: number` | `string \| undefined` | 이전 형제(있는 경우)의 태그 이름 |
  | 문서 | `getNextSibling` | `position?: number` | `string \| undefined` | 다음 형제(있는 경우)의 태그 이름 |
  | 문서 | `getTagName` | `position?: number` | `string \| null` | `position`(또는 커서)에 있는 요소의 태그 이름 |
  | 요소 검색 | `findPositionRange` | `tagName: string` | `{ from: number, to: number } \| undefined` | 지정된 태그가 있는 첫 번째 요소의 범위 |
  | 요소 검색 | `findPositionRanges` | `tagName: string` | `Array<{ from: number, to: number }>` | `tagName`과(와) 일치하는 요소의 모든 범위 |
  | 속성 | `getAttributeAtPosition` | `position: number, attrName: string` | `unknown` | `position`의 노드에서 XML 특성 값을 읽습니다. |
  | 속성 | `getSerializableAttributes` | `xpath: string` | `Record<string, unknown>` | `xpath`에 있는 노드의 모든 직렬화 가능한 XML 특성 |
  | 직렬화 | `serialize` | _(없음)_ | `string` | 전체 문서를 XML로 일련화합니다. |
  | 직렬화 | `serializeToText` | _(없음)_ | `string` | 전체 문서를 일반 텍스트로 직렬화합니다. |
  | 직렬화 | `getRangeXml` | `xpaths: AncestorXpathItem[]` | `string` | XPath 정의 범위에 대한 XML 반환 |
  | 선택 항목 | `getSelectedXml` | _(없음)_ | `string` | 현재 선택된 콘텐츠를 XML 문자열로 |
  | 선택 항목 | `getSelectedText` | _(없음)_ | `string` | 마크업이 없는 선택된 텍스트 |
  | 선택 항목 | `hasSelection` | _(없음)_ | `boolean` | 활성 텍스트/노드 선택이 있는 경우 `true` |
  | 선택 항목 | `isSelectionEditable` | _(없음)_ | `boolean` | 현재 선택 영역이 편집 가능한 컨텐츠 내에 있는지 여부 |
  | 선택 항목 | `isPositionEditable` | `position: number` | `boolean` | `position`이(가) 편집 가능한 콘텐츠 내에 있는지 여부 |
  | 삽입 | `canInsert` | `name: string, position?: number, insertMode?: 'after' \| 'before' \| 'rename'` | `boolean` | `position`(또는 커서)에 `name`을(를) 삽입할 수 있는지 여부 |
  | 삽입 | `getInsertPosition` | `name: string, position?: number, insertMode?: 'after' \| 'before' \| 'rename'` | `number \| null` | `name`의 올바른 삽입 위치 또는 삽입 가능하지 않은 경우 `null` |
  | 삽입 | `getNodeXml` | `nodeName: string, nodeContent?: string` | `string \| null` | 노드 유형에 대한 XML 템플릿 |
  | 줄바꿈/이름 바꾸기 | `getValidWrapNodeElementNames` | _(없음)_ | `string[]` | 현재 선택 영역을 줄 바꿈할 수 있는 요소 이름 |
  | 줄바꿈/이름 바꾸기 | `getValidRenameNodeElementNames` | _(없음)_ | `string[]` | 요소 이름 현재 노드의 이름을 로 바꿀 수 있습니다. |
  | 표 | `getTableInfo` | `position?: number` | `{ rows: number, cols: number, header: number }` | 현재 테이블의 차원 |
  | 태그 보기 | `isTagViewActive` | _(없음)_ | `boolean` | 태그 보기 렌더링이 활성화되었는지 여부 |

  **예: 커서 위치와 상위 이름을 가져옵니다**

  ```js
  const textPos = guides.editor.runUtil("getTextPos");
  const ancestorNames = guides.editor.runUtil(
    "getAncestorsNames",
    typeof textPos === "number" ? textPos : undefined
  );
  ```

  **예: `<xref>` 요소를 모두 찾아서 해당 특성을 읽습니다**

  ```js
  const xrefRanges = guides.editor.runUtil("findPositionRanges", "xref") || [];
  xrefRanges.forEach((range) => {
    const id = guides.editor.runUtil("getAttributeAtPosition", range.from, "id");
    const placeholderText = guides.editor.runUtil(
      "getAttributeAtPosition",
      range.from,
      "placeholdertext"
    );
  });
  ```

  **예: 루트 요소 범위를 찾아 해당 특성을 읽습니다**

  ```js
  const rootRange = guides.editor.runUtil("findPositionRange", "concept"); // or "topic"
  if (rootRange) {
    const createdDate = guides.editor.runUtil(
      "getAttributeAtPosition",
      rootRange.from,
      "createdDate"
    );
    const author = guides.editor.runUtil(
      "getAttributeAtPosition",
      rootRange.from,
      "author"
    );
  }
  ```

  **예: 작업 전에 선택 내용을 확인하고 상위 컨텍스트 유효성 검사**

  ```js
  const ancestorsDetails = guides.editor.runUtil('getAncestorsDetails');
  const selectedText = guides.editor.runUtil('getSelectedPlainText');
  const hasSelection = !!guides.editor.runUtil('hasSelection');
  
  const firstAncestor = ancestorsDetails?.currNode || ancestorsDetails?.ancestors?.[0]?.tagName;
  if (firstAncestor === 'ph') {
    tcx.util.showAlert("warning", "Operation is not allowed inside this element type.");
    return;
  }
  ```

  **예: 상위 XPath에서 요소 ID를 가져옵니다**

  ```js
  const ancestorItems = guides.editor.runUtil('getAncestorXpaths', true);
  for (const item of ancestorItems) {
    const attrs = guides.editor.runUtil('getSerializableAttributes', item.xpath);
    if (attrs?.id) { /* use element ID */ }
  }
  ```

## 데코레이션 API

데코레이션 API는 일반적인 시각적 사용자 지정을 위해 전체 ProseMirror 플러그인을 작성하는 대신 더 높은 수준의 대체 기능을 제공합니다. `Plugin`, `PluginKey` 및 `DecorationSet`을(를) 수동으로 관리하는 대신 장식할 *내용*&#x200B;과(와) *방법*&#x200B;을(를) 설명하고 편집기의 중앙 장식 관리자가 내부적으로 ProseMirror 상태를 처리합니다.

장식은 언제든지 독립적으로 업데이트하거나 제거할 수 있도록 문자열 `id`에 의해 식별됩니다.

>[!NOTE]
>
> **새 편집기만** 이러한 API는 레거시 편집기(`version === '1.0.0'`)에서 작동하지 않습니다.

- `guides.editor.addDecoration(id, selector, options)`: 장식 규칙을 추가하거나 대체합니다. 현재 문서의 `selector`과(와) 일치하는 모든 노드는 `options`에 따라 장식됩니다. 모든 문서 변경 시 장식이 자동으로 다시 적용됩니다.

  **서명:**

  ```ts
  guides.editor.addDecoration(
    id: string,
    selector: string,
    options: DecorationOptions
  ): boolean
  ```

  **`DecorationOptions`필드:**

  | 필드 | 유형 | 설명 |
  |---|---|---|
  | `class` | `string` | CSS 클래스 이름이 일치하는 노드에 추가됨 |
  | `computeAttributes` | `(node, context) => Record<string, string>` | 함수가 노드당 동적 `data-*` 또는 다른 HTML 특성을 반환함 |
  | `filter` | `(node) => boolean` | 선택적 조건자 — `true`을(를) 반환하는 노드만 장식됩니다. |

  `computeAttributes`에 전달된 `context` 개체는 다음을 포함합니다.
   - `index` — 선택기와 일치하는 형제 중 노드의 0부터 위치

  **예: 모든 `<section>` 요소에 CSS 클래스 추가**

  ```js
  guides.editor.addDecoration('highlight-sections', 'section', {
    class: 'my-section-highlight'
  });
  ```

  **예: 계산된 `data-number-label` 특성을 각 섹션에 추가**

  ```js
  guides.editor.addDecoration('section-numbers', 'section', {
    computeAttributes: (node, context) => ({
      'data-number-label': String(context.index + 1)
    })
  });
  ```

  **예: `importance="high"` 특성이 있는 섹션만 꾸미기**

  ```js
  guides.editor.addDecoration('important-sections', 'section', {
    class: 'section-important',
    filter: (node) => node.attrs?.xmlAttrs?.importance === 'high'
  });
  ```

  **예: 클래스와 계산된 특성 결합**

  ```js
  guides.editor.addDecoration('numbering-mode', 'conbody', {
    class: 'legacy-numbering'
  });
  
  guides.editor.addDecoration('section-numbers', 'section', {
    computeAttributes: (node, context) => ({
      'data-number-label': String(context.index + 1)
    })
  });
  ```

- `guides.editor.removeDecoration(id)`: ID로 이전에 추가한 장식을 제거합니다.

  **서명:**

  ```ts
  guides.editor.removeDecoration(id: string): boolean
  ```

  **예:**

  ```js
  guides.editor.removeDecoration('section-numbers');
  ```

- `guides.editor.batchDecorations(changes)`: 하나의 ProseMirror 디스패치에 여러 추가/제거 장식 변경 사항을 적용합니다. 여러 장식을 한 번에 전환하여 여러 번 다시 렌더링하지 않도록 할 때 사용합니다.

  **서명:**

  ```ts
  guides.editor.batchDecorations(changes: DecorationBatchChange[]): boolean
  
  type DecorationBatchChange =
    | { action: 'add', id: string, selector: string, options: DecorationOptions }
    | { action: 'remove', id: string }
  ```

  **예: 두 번호 매기기 모드 간에 자동으로 전환**

  ```js
  guides.editor.batchDecorations([
    { action: 'remove', id: 'legacy-numbering' },
    {
      action: 'add',
      id: 'division-numbering',
      selector: 'conbody',
      options: { class: 'division-numbering' }
    }
  ]);
  ```

  **예: 장식 하나를 지우고 새 장식 두 개를 추가합니다**

  ```js
  guides.editor.batchDecorations([
    { action: 'remove', id: 'old-highlights' },
    {
      action: 'add',
      id: 'section-labels',
      selector: 'section',
      options: {
        computeAttributes: (node, ctx) => ({ 'data-section-index': String(ctx.index) })
      }
    },
    {
      action: 'add',
      id: 'note-style',
      selector: 'note',
      options: { class: 'styled-note' }
    }
  ]);
  ```

- `guides.editor.clearDecorations()`: 장식 관리자가 관리하는 모든 활성 장식을 제거합니다.

  **서명:**

  ```ts
  guides.editor.clearDecorations(): boolean
  ```

  **예:**

  ```js
  guides.editor.clearDecorations();
  ```

- `guides.editor.getDecorations()`: 현재 활성화된 모든 장식의 ID를 반환합니다.

  **서명:**

  ```ts
  guides.editor.getDecorations(): string[]
  ```

  **예:**

  ```js
  const active = guides.editor.getDecorations();
  console.log('Active decorations:', active);
  // e.g. ['section-numbers', 'numbering-mode', 'note-style']
  ```


### 장식 API와 `registerPlugin`

| 시나리오 | 사용 |
|---|---|
| 일치하는 요소에 CSS 클래스 또는 `data-*` 특성 적용 | `addDecoration` |
| 런타임 상태(메타데이터, 사용자 작업)에 따라 스타일 전환 또는 업데이트 | `addDecoration` / `removeDecoration` / `batchDecorations` |
| 복잡한 플러그인 논리: 사용자 지정 상태, 키 바인딩, 위젯 장식, 이벤트 핸들러 | `registerPlugin` |
| 그림자 DOM에 CSS 삽입 | `css` 필드가 있는 `registerPlugin` |


## ProseMirror 플러그인 등록

- `guides.editor.registerPlugin(factory)`: 모든 새 편집기 인스턴스에 포함할 ProseMirror 플러그인 팩토리를 등록합니다. 팩터리 함수만 허용되며 직접 플러그인 인스턴스는 거부됩니다. 팩토리는 편집기 인스턴스당 한 번씩 호출되어 격리된 플러그인 상태를 보장합니다.

  **서명:**

  ```ts
  guides.editor.registerPlugin(factory: () => PluginConfig): void
  
  interface PluginConfig {
    plugin: ProseMirrorPlugin | ProseMirrorPlugin[]
    css?: string  // Injected into editor's shadow DOM
  }
  ```

  **예: 편집기가 준비된 후 플러그인 등록**

  ```js
  guides.ready(() => {
    guides.editor.registerPlugin(createNumberingPlugin);
    guides.editor.registerPlugin(createXrefPlugin);
  });
  ```

  **예: CSS를 사용한 인라인 팩터리**

  ```js
  guides.editor.registerPlugin(() => ({
    plugin: new guides.editor.prosemirror.state.Plugin({
      key: new guides.editor.prosemirror.state.PluginKey("myPlugin"),
      props: {
        decorations(state) {
          // return DecorationSet...
        }
      }
    }),
    css: `.my-decoration { background: yellow; }`
  }));
  ```

  >[!NOTE]
  >
  > `css`을(를) 통해 전달된 CSS가 편집기의 섀도 DOM에 삽입됩니다. 일반 페이지 수준 스타일시트는 편집기 내에 적용되지 않습니다.

## ProseMirror 라이브러리

- `guides.editor.prosemirror`: 플러그 인 개발에 사용하기 위해 ProseMirror 패키지를 직접 표시합니다. 따라서 확장 코드에서 ProseMirror를 별도로 번들로 묶을 필요가 없습니다.

  | 속성 | 패키지 |
  |---|---|
  | `state` | `prosemirror-state` |
  | `model` | `prosemirror-model` |
  | `view` | `prosemirror-view` |
  | `transform` | `prosemirror-transform` |
  | `commands` | `prosemirror-commands` |
  | `keymap` | `prosemirror-keymap` |
  | `history` | `prosemirror-history` |
  | `tables` | `prosemirror-tables` |
  | `dropcursor` | `prosemirror-dropcursor` |
  | `markdown` | `prosemirror-markdown` |

  **예: 노드 장식 플러그 인 만들기**

  ```js
  const myPluginKey = new guides.editor.prosemirror.state.PluginKey("myPlugin");
  
  const createMyPlugin = () => {
    const { Plugin } = guides.editor.prosemirror.state;
    const { Decoration, DecorationSet } = guides.editor.prosemirror.view;
  
    return {
      plugin: new Plugin({
        key: myPluginKey,
        state: {
          init() { return { enabled: true }; },
          apply(tr, value) {
            const meta = tr.getMeta(myPluginKey);
            return meta ? { ...value, ...meta } : value;
          }
        },
        props: {
          decorations(state) {
            const decorations = [];
            state.doc.descendants((node, pos) => {
              if (node.type.name === "section") {
                decorations.push(
                  Decoration.node(pos, pos + node.nodeSize, { class: "my-section" })
                );
              }
            });
            return DecorationSet.create(state.doc, decorations);
          }
        }
      }),
      css: `.my-section { border-left: 3px solid #ccc; padding-left: 8px; }`
    };
  };
  ```

  **예: 위젯 장식 플러그인(인라인 표시 텍스트) 만들기**

  ```js
  const xrefPluginKey = new guides.editor.prosemirror.state.PluginKey("xrefDisplay");
  
  const createXrefPlugin = () => {
    const { Plugin } = guides.editor.prosemirror.state;
    const { Decoration, DecorationSet } = guides.editor.prosemirror.view;
  
    return {
      plugin: new Plugin({
        key: xrefPluginKey,
        props: {
          decorations(state) {
            const decorations = [];
            state.doc.descendants((node, pos) => {
              if (node.type.name.includes("xref")) {
                const display = node.attrs?.xmlAttrs?.placeholdertext;
                if (display) {
                  decorations.push(
                    Decoration.widget(pos + 1, () => {
                      const el = document.createElement("span");
                      el.textContent = `[${display}]`;
                      el.setAttribute("contenteditable", "false");
                      return el;
                    }, { key: `xref-${pos}` })
                  );
                }
              }
            });
            return DecorationSet.create(state.doc, decorations);
          }
        }
      }),
      css: `.xref-display-text { color: #0074d9; pointer-events: none; }`
    };
  };
  ```

## 편집기에 CSS 삽입

안내서 DITA 편집기는 범주가 `apps.guides.dita_editor.content`인 clientlib에서 작성자 모드 콘텐츠 스타일을 로드합니다. 해당 clientlib에는 범주 아래에 등록된 모든 clientlib을 자동으로 가져오는 `embed` 선언이 있습니다.

```
apps.guides.xml_editor.dita_content_overrides
```

편집기의 콘텐츠 영역에 사용자 지정 CSS를 삽입하려면 이 범주로 AEM clientlib 노드를 만듭니다. 추가 배선이 필요하지 않습니다. 편집기 페이지가 로드되면 Guides에서 자동으로 해당 배선을 선택합니다.

**AEM clientlib 노드 구조(`/apps/my-extension/clientlibs/editor-content-overrides/.content.xml`)**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jcr:root xmlns:cq="http://www.day.com/jcr/cq/1.0"
          xmlns:jcr="http://www.jcp.org/jcr/1.0"
    jcr:primaryType="cq:ClientLibraryFolder"
    categories="[apps.guides.xml_editor.dita_content_overrides]"/>
```

CSS 파일(`css.txt` + `.css` 파일)을 이 폴더 안에 넣습니다. 편집기의 콘텐츠 스타일시트에 자동으로 포함됩니다.

**예: 작성자 모드에서 섹션 제목 스타일 재정의**

```css
/* /apps/my-extension/clientlibs/editor-content-overrides/css/content.css */

/* Increase section title font size in author mode */
.section > title {
  font-size: 1.4em;
  font-weight: bold;
  color: #333;
}

/* Highlight note blocks */
.note {
  border-left: 4px solid #0074d9;
  padding-left: 12px;
  background: #f0f7ff;
}
```

>[!NOTE]
>
>이 CSS는 기존 CKEditor 기반 작성자 표면만 타겟팅합니다. 그림자 DOM을 사용하는 New Editor(ProseMirror) 내에서는 효과가 없습니다.


### 새 편집기: `registerPlugin`의 `css`

새 편집기는 **그림자 DOM** 내에서 렌더링되어 AEM `clientlibs`을(를) 포함한 모든 페이지 수준 스타일과 분리됩니다. 새 편집기의 작성자 표면에 CSS를 삽입하려면 플러그 인 팩토리에서 반환된 `PluginConfig`의 일부로 `css` 문자열을 전달합니다.

CSS는 편집기 인스턴스가 만들어질 때마다 편집기의 섀도 루트 내부에 직접 `<style>` 태그로 삽입됩니다.

**예: 장식 플러그인과 함께 스타일 삽입**

```js
guides.ready(() => {
  guides.editor.registerPlugin(() => ({
    plugin: createMyPlugin(), // your ProseMirror plugin
    css: `
      /* Styles scoped to the New Editor shadow DOM */
      .section > .title-node {
        font-size: 1.4em;
        font-weight: bold;
        color: #333;
      }

      .note-node {
        border-left: 4px solid #0074d9;
        padding-left: 12px;
        background: #f0f7ff;
      }
    `
  }));
});
```

**예: CSS 전용 플러그인(장식 논리 없음)**

```js
guides.ready(() => {
  guides.editor.registerPlugin(() => ({
    plugin: new guides.editor.prosemirror.state.Plugin({}), // no-op plugin
    css: `
      /* Custom author-mode typography */
      [data-xml-element="codeblock"] {
        font-family: monospace;
        background: #f5f5f5;
        padding: 8px;
        border-radius: 4px;
      }
    `
  }));
});
```

>[!NOTE]
>
> 이 CSS는 New Editor shadow DOM 내부에만 적용됩니다. 페이지의 나머지 부분이나 기존 편집기에는 영향을 주지 않습니다.


## 컨텍스트 메뉴 확장(`contextMenuWidget`)

확장은 확장 구성에서 `contextMenuWidget` 필드를 선언하여 편집기의 마우스 오른쪽 단추 클릭/이동 경로 상황에 맞는 메뉴에 항목을 추가할 수 있습니다. 프레임워크에 타깃팅할 편집기 메뉴를 알려줍니다.

### 위젯 ID

| 위젯 ID | 편집기 |
|---|---|
| `dita_editor_menu` | 기존 CKEditor 작성자 표면(탐색 표시 + 요소 컨텍스트 메뉴) |
| `markup_editor_menu` | 새 편집기(ProseMirror) 탐색 표시 및 요소 상황에 맞는 메뉴 |

두 위젯은 페이지에 동시에 마운트됩니다. 프레임워크는 이 필드를 기반으로 각 확장을 올바른 메뉴와 일치시킵니다.

> 확장은 배열을 전달하여 두 편집기를 모두 타깃팅할 수도 있습니다. `contextMenuWidget: ["dita_editor_menu", "markup_editor_menu"]`

### 레거시 편집기: `dita_editor_menu`

기존 CKEditor 컨텍스트 메뉴에 표시되어야 하는 확장에 사용합니다.

```js
const myContextMenuExtension = {
  id: "dita_author_view_menu",
  contextMenuWidget: "dita_editor_menu",
  view: {
    items: [
      {
        displayName: "My Custom Action",
        data: { eventid: "myCustomAction" },
        icon: "textSpaceAfter",
        target: {
          key: "displayName",
          value: "Wrap Element",   // insert after this existing menu item
          viewState: "append",
        },
      },
    ],
  },
  controller: {
    myCustomAction() {
      console.log("Custom action triggered");
    },
  },
};
```

### 새 편집기: `markup_editor_menu`

새 편집기 컨텍스트 메뉴(탐색 표시 및 요소 마우스 오른쪽 버튼 클릭)에 표시되어야 하는 확장에 사용합니다. 컨트롤러는 `handleExtensionEvent`을(를) 통해 이벤트를 수신합니다. 이 이벤트는 로컬 처리기를 `markup_editor_menu` 컨트롤러로 라우팅하고 앱 이벤트 처리기를 통해 전역 이벤트를 전달합니다.

```js
const myMarkupContextMenu = {
  id: "dita_author_view_menu",
  contextMenuWidget: "markup_editor_menu",
  view: {
    items: [
      {
        displayName: "Edit Cross Reference",
        data: { eventid: "editCrossReference" },
        icon: "link",
        target: {
          key: "displayName",
          value: "Cut",
          viewState: "prepend",
        },
      },
      {
        displayName: "Remove Cross Reference",
        data: { eventid: "removeCrossReference" },
        icon: "deleteOutline",
        target: {
          key: "displayName",
          value: "Edit Cross Reference",
          viewState: "append",
        },
      },
    ],
  },
  controller: {
    editCrossReference() {
      // Use guides.editor APIs to read context
      const ancestorXpaths = guides.editor.runUtil("getAncestorXpaths", true);
      // open dialog or take action...
    },
    removeCrossReference() {
      guides.editor.runCommand("unwrapNode");
    },
  },
};
```

## 유틸리티 라이브러리

- `guides.util.lodash`:The lodash 유틸리티 라이브러리, 같은 인스턴스가 편집기와 함께 번들로 제공됩니다.

  ```js
  const uniqueIds = guides.util.lodash.uniq(ids);
  ```

- `guides.util.async`: 확장을 사용하기 위한 비동기 유틸리티 라이브러리입니다.

  ```js
  guides.util.async.parallel([task1, task2], callback);
  ```

## 전체 API 참조

| API | 설명 |
|---|---|
| `filePath` | 활성 문서의 파일 경로 가져오기 |
| `version` | 로드된 편집기 버전 문자열 가져오기 |
| `appState(key)` | 애플리케이션 모델에서 값 읽기 |
| `focus()` | 활성 편집기에 포커스 지정 |
| `canInsertXmlElement(tag, insertAfter?)` | 커서에 요소를 삽입할 수 있는지 확인 |
| `selectCurrentBlockElement()` | 현재 블록 요소 선택 |
| `getValidElementNamesForInsertion(args)` | 삽입에 유효한 요소 이름 나열 |
| `updateAttributeByXpath(args)` | XPath로 속성 업데이트 |
| `runCommand(name, ...args)` | 명명된 편집기 명령 실행 |
| `canRunCommand(name, ...args)` | 명령을 실행할 수 있는지 확인 |
| `runUtil(name, ...args)` | 명명된 편집기 유틸리티 호출 |
| `addDecoration(id, selector, options)` | 일치하는 요소에 명명된 장식 규칙 추가 또는 바꾸기 |
| `removeDecoration(id)` | ID별 장식 규칙 제거 |
| `batchDecorations(changes)` | 한 번의 디스패치에 여러 개의 장식 추가/제거 변경 적용 |
| `clearDecorations()` | 모든 활성 장식 규칙 제거 |
| `getDecorations()` | 현재 활성화된 모든 장식의 ID 가져오기 |
| `registerPlugin(factory)` | ProseMirror 플러그인 팩토리 등록(또한 그림자 DOM CSS 주입을 위한 메커니즘) |
| `prosemirror.state` | `prosemirror-state` 패키지 |
| `prosemirror.model` | `prosemirror-model` 패키지 |
| `prosemirror.view` | `prosemirror-view` 패키지 |
| `prosemirror.transform` | `prosemirror-transform` 패키지 |
| `prosemirror.commands` | `prosemirror-commands` 패키지 |
| `prosemirror.keymap` | `prosemirror-keymap` 패키지 |
| `prosemirror.history` | `prosemirror-history` 패키지 |
| `prosemirror.tables` | `prosemirror-tables` 패키지 |
| `prosemirror.dropcursor` | `prosemirror-dropcursor` 패키지 |
| `prosemirror.collab` | `prosemirror-collab` 패키지 |
| `prosemirror.markdown` | `prosemirror-markdown` 패키지 |
