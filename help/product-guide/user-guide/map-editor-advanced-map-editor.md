---
title: 맵 편집기 기능
description: Adobe Experience Manager Guides의 맵 편집기 기능을 이해할 수 있습니다. DITA 맵을 통해 주제를 편집하고 레이아웃 보기, 작성자 보기 및 미리보기 모드를 사용합니다.
exl-id: e58e3705-2c3b-48cc-b2c8-2596e9751c85
feature: Authoring, Map Editor
role: User
source-git-commit: 4cb5934fab1897bd36de33f2192ae2c4392c07eb
workflow-type: tm+mt
source-wordcount: '2563'
ht-degree: 0%

---

# 맵 편집기 기능 {#id1942D0S0IHS}

맵 편집기의 도구 모음은 주제 편집기와 유사합니다. 왼쪽 패널 전환, 맵 저장, 새 맵 버전 만들기, 마지막 작업 실행 취소/다시 실행 및 선택한 요소 삭제와 같은 기본 작업은 두 편집기에서 공통됩니다. 이러한 작업이 작동하는 방식에 대한 자세한 내용은 편집기[&#x200B; 섹션에서 &#x200B;](web-editor-toolbar.md#)도구 모음을 확인하세요.

편집기 도구 모음에서 보는 옵션은 맵 편집기 보기를 기반으로 합니다. 맵 편집기에서 사용할 수 있는 네 가지 보기가 있습니다.

- [레이아웃](#layout-view)
- [작성자](#author-view)
- [소스](#source-view)
- [미리보기](#preview)

다음 섹션에서는 맵 편집기의 다양한 보기에서 사용할 수 있는 도구 모음 옵션을 다룹니다.

## 레이아웃 보기

편집할 맵을 열면 맵 편집기의 레이아웃 보기가 열립니다. 레이아웃 보기는 맵 계층 구조를 트리 보기로 표시하며 이를 통해 맵에서 항목을 구성할 수 있습니다.

>[!NOTE]
>
> 레이아웃 보기에는 맵에 있는 참조만 표시됩니다. 참조가 끊어진 경우 참조 왼쪽에 작은 십자 기호가 표시됩니다

레이아웃 보기의 도구 모음에서 다음 옵션을 사용할 수 있습니다.

**주제 참조** - ![](images/topic-reference.svg)

주제 검색 대화 상자를 표시합니다. 삽입할 주제/맵 파일로 이동한 다음 **선택**&#x200B;을 선택하여 맵에 추가합니다.

![](images/insert-topic-reference-dialog.png){align="left"}


**주제 그룹** - ![](images/topic-group.svg)

`topicgroup` 요소를 삽입합니다. 주제 그룹화에 대한 자세한 내용은 OASIS DITA 언어 사양의 [topicgroup](https://docs.oasis-open.org/dita/v1.0/langspec/topicgroup.html) 설명서를 참조하십시오.

**키 정의** - ![](images/key-definition.svg)

Keydef 삽입 대화 상자를 표시합니다. 이 대화 상자를 사용하여 맵에서 사용할 키 정의를 정의합니다.

![](images/insert-key-definition-dialog.png){width="300" align="left"}

**다음 항목 앞에 삽입/다음 항목 뒤에 삽입** - ![](images/insert_element_before_icon.svg) / ![](images/insert_element_after_icon.svg)

요소 삽입 대화 상자를 표시합니다. 맵에 삽입할 요소를 선택합니다. 작업에 따라 새 요소는 맵에서 현재 요소의 앞 또는 뒤에 삽입됩니다.

**앞면 문제 삽입** - ![](images/frontmatter.svg)

이 아이콘은 편집할 북맵을 열 때 표시됩니다. 목차, 색인, 목차 등 책의 시작 부분에 구성 요소를 삽입할 수 있다.

**뒤로 삽입** - ![](images/backmatter.svg)

이 아이콘은 편집할 북맵을 열 때 표시됩니다. 색인, 용어집, 그림 목록과 같은 책 끝에 의 구성 요소를 삽입할 수 있습니다.

**선택한 항목을 왼쪽/오른쪽으로 이동** - ![](images/move-left.svg) / ![](images/move-right.svg)

왼쪽 화살표를 선택하여 항목을 계층 구조에서 왼쪽으로 이동합니다. 이렇게 하면 각 주제가 계층 구조에서 한 수준 위로 승격됩니다. 예를 들어, 하위 주제가 선택된 상태에서 왼쪽 화살표를 선택하면 해당 주제가 상위 주제의 형제 주제가 됩니다. 마찬가지로 오른쪽 화살표를 선택하면 주제가 오른쪽으로 밀려 주제가 위에 있는 주제의 하위가 됩니다.

**선택한 항목을 위/아래로 이동** ![](images/move-up.svg) - / ![](images/move-down.svg)

위 또는 아래 화살표 아이콘을 선택하여 계층에서 항목을 위나 아래로 이동합니다.

>[!NOTE]
>
> 참조를 드래그 앤 드롭하여 맵에서 이동할 수도 있습니다.

**잠금/잠금 해제**

맵 파일을 잠근 후 잠금을 해제합니다. 맵 파일에 저장하지 않은 변경 사항이 있는 경우 잠금을 해제할 때 맵 파일을 저장하라는 메시지가 표시됩니다. 변경 사항은 맵 파일의 현재 버전에 저장됩니다.

**병합** - ![](images/merge.svg)

동일한 파일 또는 다른 파일의 다른 버전에서 콘텐츠를 병합하는 방법에 대한 자세한 내용은 편집기에서 [병합](web-editor-features.md#menu-dropdown)을 참조하십시오.

**버전 기록** - ![](images/version-history-web-editor-ico.svg)

활성 토픽에서 사용 가능한 버전 및 레이블을 확인하고 편집기 자체의 버전으로 되돌립니다.

**버전 레이블** - ![](images/version-label.svg)

버전 레이블 관리 대화 상자를 표시합니다. 드롭다운 목록에서 버전을 선택합니다. 선택한 버전에 적용할 레이블을 선택하고 **레이블 추가**&#x200B;를 선택하여 추가합니다.

**파일 이름 표시**

주제의 파일 이름을 표시합니다.

>[!NOTE]
>
> 주제 제목 위에 포인터를 놓으면 파일 경로가 표시됩니다.

**줄 번호 표시**

각 주제의 줄 번호를 표시하거나 숨깁니다. 라인 번호는 계층 구조의 레벨에 따라 표시됩니다.

**확인란 표시**

각 주제에 대한 확인란을 표시하거나 숨깁니다. 확인란을 사용하여 항목을 선택하고 옵션 메뉴를 사용하여 다양한 작업을 수행할 수 있습니다.

**레이아웃 보기의 옵션 메뉴**

맵 파일에서 주제를 구성할 뿐만 아니라 파일 위로 마우스를 이동하거나 레이아웃 보기에서 편집기 내부를 마우스 오른쪽 단추로 클릭할 때 나타나는 옵션 메뉴를 사용하여 다음 작업을 수행할 수도 있습니다.

![](images/map-editor-options-menu.png){width="650" align="left"}

- **추가**: 맵 편집기에서 새 주제 또는 빈 참조를 추가하도록 선택할 수 있습니다.
   - **빈 참조**: 이 옵션을 사용하면 DITA 맵에 빈 참조를 추가할 수 있습니다. 나중에 삽입된 빈 참조를 두 번 클릭하고 항목 세부 사항을 추가할 수 있습니다.
   - **새 주제**: 메뉴에서 새 주제를 만들도록 선택하면 **새 주제** 대화 상자가 나타납니다. **새 항목** 대화 상자에서 필요한 세부 정보를 입력하고 **만들기**&#x200B;를 선택합니다.
- **이동**: 계층 구조에서 항목을 위/아래/오른쪽/왼쪽으로 이동하도록 선택할 수 있습니다. 저장소 패널의 주제나 맵을 맵 편집기에서 연 맵으로 드래그 앤 드롭할 수도 있습니다.
- **실행 취소**: 레이아웃 보기에서 마지막 작업을 실행 취소합니다.
- **다시 실행**: 레이아웃 보기에서 마지막 작업을 다시 실행합니다.
- **복사**: 맵 파일에서 선택한 참조를 복사합니다.

  >[!NOTE]
  >
  > 확인란을 표시한 다음 선택하여 여러 참조를 복사합니다.

- **붙여넣기**: 복사한 참조를 계층 구조의 현재 위치에 붙여넣습니다.
- **삭제**: 맵 파일에서 선택한 참조를 삭제합니다.

  >[!NOTE]
  >
  > 확인란을 표시한 다음 선택하여 여러 참조를 삭제할 수 있습니다.

**조건부 필터를 기반으로 항목 보기**

주제에 조건을 적용한 경우 주제 오른쪽에 필터 아이콘이 표시됩니다. 포인터를 필터 아이콘 위에 올리면 적용된 조건과 해당 속성 값이 표시됩니다.

## 작성자 보기

**작성자** 보기를 사용하면 편집기에서 DITA 맵을 편집할 수 있습니다. 이는 맵 편집기의 WYSIWYG 보기를 보여주며 작성자 보기에 표시된 일부 아이콘은 레이아웃 보기와 동일합니다.

![](images/map-editor-author-view.png){align="left"}

또한 다음 아이콘을 보고 작성자 보기에서 관련 작업을 수행할 수 있습니다.

**다음 항목 앞에 삽입/다음 항목 뒤에 삽입** - ![](images/insert_element_before_icon.svg) / ![](images/insert_element_after_icon.svg)

**다음 항목 앞에 요소 삽입 또는 &#x200B;** 다음 항목 뒤에 요소 삽입 대화 상자를 표시합니다. 맵에 삽입할 요소를 선택합니다. 작업에 따라 새 요소는 맵에서 현재 요소의 앞 또는 뒤에 삽입됩니다.

**요소** - ![](images/Add_icon.svg)

**요소 삽입** 대화 상자를 표시합니다. 삽입할 요소를 선택합니다. 키보드를 사용하여 요소 목록을 스크롤하고 Enter 키를 눌러 필요한 요소를 삽입할 수 있습니다. 또는 요소를 선택하여 맵에 삽입할 수 있습니다.




<!-----------------------------------------------------------

**Relationship table** - ![](images/relationship_table_icon.svg)

Inserts a relationship table in the map.

Perform the following steps to work with relationship tables in the Basic Map Editor:

1.  In the Assets UI, navigate to the DITA map in which you want to create the relationship table.

1.  Select the DITA map to open it in DITA map console.

1.  Select the **Topics** tab to view a list of topics available in the DITA map.

    >[!TIP]
    >
    > The Topics tab gives you an option to download the map file with its dependents. For more details, view [Export a DITA map file](authoring-download-assets.md#id218UBA00IXA).

1.  In the main toolbar, select **Edit**.

    The map file is opened in the Advanced Map Editor.

1.  Select **Reltable** from the toolbar.

    ![](images/reltable.png){width="650" align="left"}

1.  Drag-and-drop topics from the topic list to the Reltable editor.

    >[!NOTE]
    >
    > You can add topics from any folder in the References rail.

    ![](images/create-reltable.png){width="550" align="left"}

1.  To add a header to your relationship table, click **Add Relheader**.

1.  To add a column to your relationship table, click **Add a Column**.

    ![](images/complete-reltable.png){width="550" align="left"}

1.  Click **Save**.


You can also perform the following actions from the relationship table editor:

**Delete rows or columns**

If you want to delete a column from your table, select the checkbox in the column header and click Delete. If you want to remove a row from table, select the checkbox in the first column of the respective row and click Delete.

**Delete a topic**

If you want to delete a topic from your table, click the cross icon next to the topic.

**Delete the relationship table**

If you want to delete the relationship table, click anywhere outside the relationship table and click Delete. For details, view [Work with relationship tables in the Map Editor](map-editor-basic-map-editor.md).
----->

**재사용 가능한 콘텐츠** - ![](images/reusable-content.svg)

**콘텐츠 재사용** 대화 상자를 표시합니다. 이 대화 상자를 사용하여 재사용할 콘텐츠를 맵에 삽입합니다.

**탐색 제목 특성 새로 고침** - ![](images/refresh.svg)

참조된 파일의 `@navtitle` 특성과 `title` 요소를 동기화하도록 허용합니다. 주제, 작업, 참조 또는 하위 맵과 같은 다양한 유형의 파일을 맵에 추가할 수 있습니다. 이 중 대부분은 맵 또는 목차에 파일 이름이 표시되는 방식을 제어하는 `@navtitle` 특성을 지원합니다. 파일에 `@navtitle` 특성이 포함되어 있으면 맵에서 동일한 파일에 대한 `@navtitle` 특성이 업데이트됩니다. `@navtitle` 특성이 없는 경우 `@navtitle` 특성이 해당 참조 파일에 추가되고 해당 `title`도 업데이트되어 `@navtitle`을(를) 표시합니다.

>[!NOTE]
>
> 관리자는 구성 속성을 사용하여 맵 편집기 도구 모음에서 이 단추를 표시하거나 숨길 수 있습니다. 또한 파일을 맵에 추가할 때 `@navtitle` 특성을 자동으로 추가할 수도 있습니다. 자세한 내용은 Adobe Experience Manager Guides as a Cloud Service 설치 및 구성에서 [@navtitle 특성을 기본적으로 포함](../cs-install-guide/auto-add-navtitle.md)*을(를) 참조하십시오.

**태그**

XML 태그를 표시하거나 숨깁니다. 태그는 요소의 경계를 나타내는 시각적 큐 역할을 합니다. 이 모드에서 주제/맵 참조를 삽입하려면 태그 앞 또는 뒤에 원하는 파일을 드래그 앤 드롭하십시오. 가로 막대는 태그 보기 모드에 표시되지 않습니다.

**변경 내용 추적** - ![](images/track-changes.svg)

변경 내용 추적 모드를 활성화하여 맵 파일에서 수행된 모든 업데이트를 추적할 수 있습니다. 변경 내용 추적을 활성화하면 모든 삽입 및 삭제 내용이 문서에 캡처됩니다. 자세한 내용은 편집기에서 [변경 내용 추적](web-editor-features.md#track-changes)을 참조하세요.

**검토 작업 만들기** - ![](images/create-review-task.svg)

편집기에서 직접 현재 주제 또는 맵 파일의 검토 작업을 만들 수 있습니다. 리뷰 작업을 만들 파일을 열고 **리뷰 작업 만들기**&#x200B;를 선택하여 리뷰 만들기 프로세스를 시작합니다. 자세한 내용은 [검토 소개](review.md#)에 나와 있는 지침을 따르십시오.

## Source 보기

이 보기를 사용하면 콘텐츠를 원시 형식으로 편집하여 구조 및 형식을 완벽하게 제어할 수 있습니다.

![](images/map-editor-source-view.png){align="left"}


이 보기에서 도구 모음은 잘라내기, 복사, 실행 취소, 다시 실행, 삭제, 찾기 및 바꾸기, 버전 레이블, 병합, 새 버전으로 저장, 잠금 및 잠금 해제를 포함하여 **메뉴** 드롭다운에서 사용할 수 있는 기본 콘텐츠 편집 및 삽입 옵션을 제공합니다.

## 미리보기

미리보기 모드는 최종 출력에 나타나는 대로 콘텐츠를 렌더링하므로 게시하기 전에 레이아웃과 서식을 검토할 수 있습니다.

맵 내에서 각 주제 파일의 위치를 볼 수 있을 뿐만 아니라, 맵 콘텐츠를 하나의 연속적인 흐름으로 보는 것이 바람직하다. 맵 미리 보기 기능을 사용하면 한 번의 클릭으로 맵 파일의 전체 콘텐츠를 볼 수 있습니다. 맵 파일의 출력을 생성하지 않아도 전체 맵이 게시된 후 어떻게 표시되는지 볼 수 있습니다. 맵의 미리보기에 간단히 액세스할 수 있으며 모든 주제와 하위 맵이 책 형태로 렌더링됩니다.

![](images/map-editor-preview.png){align="left"}

>[!NOTE]
>
> 미리보기 모드의 도구 모음에서 콘텐츠 편집 또는 삽입 옵션을 사용할 수 없습니다. 이 보기에서 콘텐츠를 편집할 수 없습니다. 그러나 **새 버전으로 저장** 및 **잠금** 또는 **잠금 해제** 기능을 사용할 수 있습니다.

미리보기 모드에서 다음과 같은 추가 작업을 수행할 수 있습니다.

- 항목을 마우스 오른쪽 단추로 클릭하고 **편집**&#x200B;을 선택하여 편집할 항목을 새 탭에서 엽니다.

  >[!NOTE]
  >
  > 편집 권한이 없는 경우 주제가 읽기 전용 모드로 열립니다.

- 맵 트리 \(왼쪽 패널\)에서 주제 제목을 선택하여 원하는 주제로 이동합니다.

- 맵 미리 보기의 현재 주제는 맵 트리에서도 강조 표시됩니다.

**맵 파일을 미리 보는 다른 방법**

다음에서 맵의 미리 보기에 액세스할 수 있습니다.

- **Assets UI**: Assets UI에서 맵 위치로 이동하고 맵 파일을 선택한 다음 도구 모음에서 **맵 미리 보기**&#x200B;를 선택합니다. 맵의 미리보기가 새 탭에 표시됩니다. 미리보기 모드에서 모든 주제의 컨텐트를 볼 수 있습니다. 이 보기에서는 항목을 편집할 수 없습니다.

  >[!NOTE]
  >
  > *맵 미리 보기* 옵션이 기본 도구 모음에 표시되지 않으면 **자세히** 도구 모음 메뉴 아래로 이동했을 수 있습니다.

- **맵 편집기**: 맵 편집기의 옵션 메뉴에서 **미리 보기**&#x200B;를 선택하여 현재 맵의 미리 보기를 확인합니다.

  ![](images/map-preview-icon.png){width="650" align="left"}

  맵 미리보기가 팝업 상자에 표시됩니다.

  ![](images/map-editor-preview-pop-up.png){width="500" align="left"}

**맵 속성**

맵의 속성 및 메타데이터 정보를 설정할 수 있는 [맵 속성] 대화 상자를 표시합니다.


## DITA 맵을 통해 주제 편집 {#id17ACJ0F0FHS}

개별 항목을 편집해도 작성자에게 전체 컨텍스트가 제공되지 않습니다. 작성자는 DITA 맵에서 주제가 배치되는 위치에 대한 정보를 가지고 있지 않습니다. 이러한 맥락적 정보가 없으면 저자는 콘텐츠를 만드는 것이 다소 어려워진다.

Experience Manager Guides을 사용하면 작성자가 편집기에서 DITA 맵을 열고 맵 내에서 주제의 배치를 볼 수 있습니다. 이렇게 하면 작성자가 맵 내에서 주제가 배치되는 위치를 정확히 알고 더 관련성이 높은 콘텐츠를 만들 수 있습니다. 또한 프로젝트에서 작업 중인 작성자가 여러 명일 경우 맵에서 모든 항목을 사용할 수 있으며, 필요한 경우 콘텐츠를 재사용할 수 있습니다.

DITA 맵을 통해 주제를 편집하려면 다음 단계를 수행합니다.

1. 저장소 패널에서 편집할 DITA 맵 파일로 이동하여 엽니다.

   맵 파일이 맵 보기에서 열립니다.

>[!NOTE]
>
> Assets UI를 사용하여 DITA 맵 파일을 열 수도 있습니다. 편집할 항목이 포함된 DITA 맵 파일로 이동하고 기본 도구 모음에서 **항목 편집**&#x200B;을 선택하여 편집기를 시작합니다.

1. 주제 링크를 선택하여 편집기에서 열어 편집합니다.

   편집기에서 여러 항목을 열 수 있으며 각 항목은 편집기의 새 탭에서 열립니다. DITA 맵에 하위 맵이 포함되어 있더라도 하위 맵의 주제는 편집을 위해 새 탭에서도 열립니다. 하위 맵 아래의 항목을 보려면 하위 맵을 선택하고 확장할 수 있습니다.

   ![](images/web-editor-multiple-topics.png){align="left"}

   맵 파일을 선택하면 편집기의 새 탭에서 맵이 열립니다.

1. 주제 편집이 끝나면 다음 작업을 수행할 수 있습니다.

   - 개별적으로 저장할 수 있습니다. 항목을 저장하지 않고 를 닫으면 저장되지 않은 항목을 저장하라는 대화 상자가 표시됩니다.

     ![](images/save-multiple-topics-new.png){width="300" align="left"}

     선택한 모든 항목을 저장하거나 저장하지 않으려는 항목을 선택 취소할 수 있습니다.

   - **새 버전으로 저장** 옵션을 사용하여 항목의 잠금을 해제할 수 있습니다. 주제의 버전을 저장하면 새 버전이 만들어지고 잠금도 해제됩니다.

     파일을 잠금 해제하기 전에 변경 사항을 저장하는 것이 좋습니다.  변경 사항을 저장하면 XML 파일의 유효성이 검사됩니다.

   - **새 버전으로 저장** 대화 상자에서 항목의 진행 상황을 볼 수도 있습니다. 파일이 잠금 해제되면 성공 메시지가 표시됩니다.

   - 관리자가 닫을 때 파일 잠금을 해제하는 옵션을 활성화한 경우 잠긴 파일을 닫을 때마다 파일을 저장하라는 메시지가 표시됩니다. 이 옵션을 활성화한 상태에서 변경된 파일이 있는 편집기를 닫으면 저장해야 하는 잠긴 파일 목록이 표시됩니다. 잠긴 파일은 잠금 아이콘과 함께 표시됩니다.

     ![](images/save-on-close-new.png){width="350" align="left"}

## 맵 편집기의 오른쪽 패널

오른쪽 패널에는 맵 편집기의 레이아웃 보기에 콘텐츠 속성 및 맵 속성 이 표시됩니다.

**콘텐츠 속성**

콘텐츠 속성 패널에는 맵에서 현재 선택한 토픽 유형, 링크 URL 및 해당 속성에 대한 정보가 포함되어 있습니다. 자세한 내용은 편집기에서 [콘텐츠 속성](web-editor-features.md#right-panel)을 참조하세요.

- **기타 특성** 관리자가 특성에 대한 프로필을 만든 경우 해당 특성이 구성된 값과 함께 제공됩니다. 콘텐츠 속성 패널을 사용하여 이러한 속성을 선택하고 주제의 관련 콘텐츠에 할당할 수 있습니다. **특성 표시**&#x200B;에서 관리자가 구성한 특성을 할당할 수도 있습니다. 요소에 대해 정의된 속성이 레이아웃 및 아웃라인 뷰에 표시됩니다. 이렇게 하면 특정 속성이 정의된 맵의 모든 항목을 빠르게 볼 수 있습니다. 예를 들어 `audience` 특성이 있는 모든 항목은 `US`(으)로 정의됩니다.

  ![레이아웃 보기](images/layout-inline-attributes.png){width="650" align="left"}


  자세한 내용은 [표시 특성](../cs-install-guide/workspace-settings.md#display-attributes)을 참조하세요.

- **메타데이터** 메타데이터 를 사용하여 메타데이터 정보를 설정할 수 있습니다. 탐색 제목, 링크 텍스트, 간단한 설명 및 키워드를 정의할 수 있습니다.

표준 주제 특성 및 메타데이터에 대한 자세한 내용은 OASIS DITA 언어 사양의 [topicref](https://docs.oasis-open.org/dita/v1.2/os/spec/langref/topicref.html) 설명서를 참조하십시오.




**상위 항목:** [맵 편집기 소개](map-editor.md)
