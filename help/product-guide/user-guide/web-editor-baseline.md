---
title: 웹 편집기에서 기준선 만들기 및 관리
description: AEM Guides의 웹 편집기에서 기준선을 만들고 관리합니다. 레이블을 기반으로 기준선을 만들고 기준선에 필터를 적용하는 방법을 알아봅니다.
exl-id: 14f87bdd-3042-46f9-853e-e9ded81b10ed
feature: Authoring, Features of Web Editor, Publishing
role: User
source-git-commit: 6006cabdc11b80179833a21b4d99d2f6c3f968ee
workflow-type: tm+mt
source-wordcount: '1687'
ht-degree: 0%

---

# 웹 편집기에서 기준선 만들기 및 관리 {#id223MB0ZF043}

>[!TIP]
>
> AEM Guides as a Cloud Service 3월 릴리스 이상으로 업그레이드한 경우 웹 편집기에서 이 기준선 기능을 사용하는 것이 좋습니다.

AEM Guides는 웹 편집기 내에 통합된 기준선 기능을 제공하여 사용자가 기준선을 만들고 이를 사용하여 다른 버전의 항목을 게시하거나 번역할 수 있도록 합니다. 동일한 DITA 맵의 여러 출력 사전 설정을 병렬로 게시할 수도 있습니다.

## 기준선 만들기

다음 단계를 수행하여 웹 편집기에서 베이스라인을 만들 수 있습니다.

1. 저장소 패널의 맵 보기에서 DITA 맵 파일을 엽니다.
1. 다음을 클릭합니다. **관리** 탭. 다음 **기준선** 패널에는 DITA 맵의 기준선이 표시됩니다.

   ![기준선 패널](images/baseline-manage.png){width="800" align="left"}

1. 다음에서 **기준선** 패널에서 오른쪽 상단의 + 아이콘을 선택하여 기준선을 만듭니다.
1. 다음에 기준 요소 이름을 입력하십시오. **이름**.
1. 위치 **구성**&#x200B;을 선택합니다. **수동 업데이트** 옵션 또는 **자동 업데이트** 옵션:

   **수동 업데이트**: 특정 날짜 및 시간에 사용할 수 있는 특정 버전의 주제 및 참조된 콘텐츠나 특정 주제 버전에 대해 정의된 레이블을 사용하여 정적 기준선을 수동으로 만들 수 있습니다.

   - 위치 **다음을 기준으로 버전 선택,** 다음 옵션 중 하나를 선택합니다.


      1. **날짜** &lt;time stamp=&quot;&quot;>: 지정된 날짜 및 시간의 항목 버전을 로 선택합니다.
      1. **레이블**: 이 옵션을 선택하면 주제에 적용되는 레이블에 따라 주제가 선택됩니다. 주제에 지정된 레이블이 있는 경우 레이블이 드롭다운에 나열됩니다. 목록에서 레이블을 선택할 수 있습니다. 텍스트 상자에 레이블을 추가할 수도 있습니다.

         정적 기준선의 직접 참조에 대해서는 저장된 최신 버전의 맵에서 레이블을 가져옵니다. 예를 들어 레이블을 만든 경우 `Label Release 1.0` 및 `Label Release 1.1` 항목 A 버전 1.0 및 1.1의 경우 버전 1.0으로 저장된 맵에 항목 A를 추가합니다. 이 경우 레이블을 볼 수 있습니다 `Label Release 1.0` 및 `Label Release 1.1` 정적 기준 요소 레이블에 대한 드롭다운입니다.


         다음을 선택할 때 **레이블,** 직접 및 간접 참조를 선택할 수 있습니다.
         - DITA 맵 내의 직접 참조의 경우 지정된 레이블이 적용되지 않은 최신 버전의 주제를 사용할 수 있는 옵션이 제공됩니다.

           >[!NOTE]
           >
           > 존재하지 않는 레이블을 입력하고 옵션을 선택하는 경우 **기준선 만들기 안 함** 그러면 베이스라인 작성에 실패하고 [베이스라인] 패널의 베이스라인 이름 근처에 오류 메시지가 표시됩니다.

         - DITA 맵 내의 간접 참조의 경우 지정된 레이블이 적용되지 않은 최신 버전의 주제를 사용할 수 있는 추가 옵션이 제공됩니다. 다음을 선택할 수도 있습니다. **자동으로 선택** 참조된 콘텐츠에 대해, 시스템은 참조된 콘텐츠의 버전에 대응하는 참조된 콘텐츠의 버전을 자동으로 선택한다.

         날짜로 레이블 또는 버전을 선택하면 맵 내에서 참조된 모든 주제 및 미디어 파일이 그에 따라 선택됩니다. 이렇게 선택한 항목은 사용자 인터페이스에 표시되지 않지만 백엔드에 저장됩니다.

   **자동 업데이트**: 기준선 작성에 대해 이 옵션을 선택하면 주제에 적용되는 레이블에 따라 주제가 자동으로 선택됩니다.

   자동 업데이트 구성을 사용하여 만든 기준선은 동적으로 업데이트됩니다. 기준선을 생성하거나, 기준선을 다운로드하거나, 기준선을 사용하여 번역 프로젝트를 생성하는 경우, 업데이트된 레이블을 기반으로 파일이 동적으로 선택됩니다. 예를 들어, 항목의 버전 1.2를 베이스라인에 대해 Label Release 1.0으로 사용하고 나중에 Label Release 1.0으로 업데이트된 버전 1.5를 사용하면 베이스라인이 동적으로 업데이트되고 버전 1.5가 사용됩니다.

   ![기준선 만들기](images/dynamic-baseline.png){width="300" align="left"}

   - **레이블 선택**: 주제에 레이블이 지정된 경우 다음을 사용합니다. **레이블 선택** 드롭다운을 클릭하여 다음 중에서 선택 [나열된 레이블](#labels-list).
먼저 선택한 레이블은 나중에 선택한 레이블보다 우선 순위가 높습니다.

     동적 기준선의 경우, 맵의 저장된 최신 버전 및 현재 작업 카피에서 레이블을 가져옵니다. 예를 들어 레이블을 만든 경우   `Label Release A.1.0 ` 및 `Label Release A.1.1` 항목 A 및 레이블의 버전 1.0 및 1.1의 경우 `Label Release B.1.0` 및 `Label Release B.1.1` 항목 B 버전 1.0 및 1.1의 경우 . 그런 다음 항목 A를 추가하여 버전 1.0에서 A를 매핑하고 항목 B를 추가하여 1.0*에서 A를 매핑할 수 있습니다(작업 복사본). 이 경우 다음을 볼 수 있습니다  `Label Release A.1.0 `, `Label Release A.1.1`, `Label Release B.1.0`, 및 `Label Release B.1.1` 동적 기준선 레이블의 드롭다운에서 을 수행합니다.

1. **간접 참조**: DITA 맵 내의 간접 참조에 대해 다음 옵션이 제공됩니다.

   - **자동으로 선택**: 다음을 선택할 수 있습니다. **자동으로 선택** 참조된 콘텐츠에 대해, 시스템은 참조된 콘텐츠의 버전에 대응하는 참조된 콘텐츠의 버전을 자동으로 선택한다.

   - **선택한 레이블 사용**: 주제 버전에 대해 선택한 레이블이 정의된 기준선을 만들 수 있습니다.
   - **최신 버전 또는 작업 복사본 사용**: 지정된 레이블이 적용되지 않은 최신 버전의 주제를 사용하거나, 생성된 버전이 없는 경우 주제의 작업 사본을 사용하여 기준선을 생성합니다.
1. **적용**&#x200B;을 클릭합니다.

베이스라인이 생성됩니다. 기준 요소 만들기는 비동기적으로 수행되므로 웹 편집기에서 다른 파일 작업을 계속할 수 있습니다. 베이스라인이 생성되면 베이스라인이 생성되었음을 확인하는 팝업 메시지가 표시되며, 이에 대한 받은 편지함 알림도 수신하게 됩니다.

## 기준선 관리

베이스라인 대시보드의 다양한 기능을 사용하여 기존 베이스라인을 관리할 수 있습니다.

- [기준선] 패널의 텍스트 상자를 사용하여 기존 기준선을 검색할 수 있습니다. 사용 **필터 적용** 아이콘 - 모든 기준선을 표시하거나 생성 상태의 기준선을 성공, 진행 중 또는 실패로 나열합니다.
- 사용 **새로 고침** 아이콘을 클릭하면 모든 기준선을 다시 확인할 수 있고 맵 보기에서 연 DITA 맵에 대한 새 기준선 목록이 표시됩니다.
- 의 목록에서 기준선을 두 번 클릭하여 기존 정적 기준선의 내용을 보거나 편집할 수 있습니다. **기준선** 패널. 중앙에 있는 베이스라인 편집 창에는 DITA 맵 파일, 맵의 컨텐트나 주제 및 참조된 컨텐트가 표시됩니다.

  >[!NOTE]
  >
  >정적 기준선에 대한 편집 작업은 참조 변경 횟수가 적은 경우에만 권장됩니다. 모든 참조를 다시 계산해야 하므로 편집 작업은 기본 DITA 맵의 버전을 변경하지 않는 것이 좋습니다. 이로 인해 큰 DITA 맵에 대한 기준선 업데이트 오류가 발생할 수 있습니다. 더 큰 DITA 맵의 경우 새 베이스라인을 만들거나 베이스라인의 등록 정보를 편집할 수 있습니다.
  >
  >동적 기준선의 경우 편집 작업을 사용하면 동적 기준선에 대한 참조가 런타임 시 레이블을 사용하여 생성되므로 기준선의 속성을 편집할 수 있습니다.

  ![기준선 옵션](images/baseline-options.png){width="800" align="left"}



  [옵션] 메뉴에서 베이스라인에 대해 다음 작업을 수행할 수도 있습니다.

### 기준선 복제

기준선을 복제하고 요구 사항에 따라 수정할 수 있습니다.
![기준선 복제](images/baseline-duplicate.png){width="300" align="left"}
*레이블을 기반으로 기준선을 복제하거나 정확한 사본을 만듭니다.*

1. 선택 **복제** 베이스라인의 [옵션] 메뉴에서 다음 **기준선 복제** 대화 상자가 열립니다.
>[!NOTE]
> >베이스라인의 기본 이름은 입니다. `<selected baseline name>`_suffix(예: sample-baseline_1). 필요에 따라 이름을 변경할 수 있습니다.

   위치 **다음을 기준으로 버전 선택**, 다음 중 하나를 선택합니다. **정확한 사본** 옵션 또는 **레이블** 옵션:

   - **정확한 사본**: Experience Manager 안내서에서는 모든 주제의 동일한 버전을 선택하고 복제된 기준선의 정확한 사본을 만듭니다.
   - **레이블**: 드롭다운을 사용하여 다음 중 하나를 선택할 수 있습니다 [나열된 레이블](#labels-list). Experience Manager 안내서에서는 선택한 레이블이 정의된 항목의 해당 버전을 선택하고 나머지 항목의 경우 복제된 기준선에서 버전을 선택합니다. 예를 들어 레이블을 선택합니다 `Release 1.0` 드롭다운에서 이 레이블을 정의한 해당 항목 버전을 선택합니다. 다른 모든 항목의 경우 복제된 기준선에서 버전이 선택됩니다.
1. 클릭 **복제**.

- **이름 바꾸기**, 또는 **삭제** 기존 베이스라인.
- 에서 기존 레이블을 추가, 제거 또는 변경합니다. **레이블 관리** 정적 기준선에 대한 옵션입니다. 관리자가 사전 정의된 레이블을 구성한 경우 레이블 추가 드롭다운 목록에 해당 레이블이 표시됩니다. 레이블 추가에 대한 자세한 내용은 [레이블 사용](web-editor-use-label.md#).

  >[!NOTE]
  >
  > 레이블을 추가하거나 제거하는 프로세스는 비동기적으로 발생하므로 웹 편집기에서 다른 파일에 대한 작업을 계속할 수 있습니다. 레이블이 추가 또는 제거되면 레이블이 추가 또는 제거되었음을 확인하는 팝업 메시지가 표시되며, 이에 대한 받은 편지함 알림도 수신하게 됩니다.

- **속성 편집** 기준 요소를 생성하는 동안 설정한 기존 정적 기준 요소.
- 를 사용하여 Microsoft Excel 파일의 기준선 스냅숏을 내보냅니다. **기준선 내보내기** 옵션을 선택합니다.


### 레이블 목록 {#labels-list}

드롭다운에 나열된 레이블은 다음 기준을 기반으로 합니다.
- 베이스라인이 생성되는 DITA 맵의 주제 버전 중 하나에 레이블을 추가해야 합니다.
- 그리고 DITA 맵의 첫 번째 수준 참조(주제 또는 하위 맵)만 레이블 선택에 고려됩니다.



## 기준선 필터

에서 필터 아이콘 사용 **기준선 필터** 패널 기준선 편집 창에서 연 기준선에 필터를 적용할 수 있습니다.

![기준선 필터](images/baseline-filter.png){width="300" align="left"}

- 파일 이름 또는 파일 위치를 기반으로 파일을 필터링합니다.
- 파일 유형, 참조 유형 등과 같은 다양한 열에 대한 값을 기준으로 파일을 필터링합니다.
- 베이스라인 편집 창에 표시할 열을 선택합니다.

>[!NOTE]
>
> 열 머리글을 클릭하고 기준선 편집 창의 열을 기준으로 파일을 정렬할 수 있습니다.

**기준선 저장 또는 재설정**

기준선을 편집한 후에는 **저장** 변경 사항을 베이스라인에 저장하려면 맨 위에 있는 버튼을 클릭합니다. 다음을 클릭할 수 있습니다 **재설정** 변경 내용을 저장하고 기준선을 재설정하지 않으려면 버튼을 누릅니다. 다음을 클릭하면 **재설정** 버튼 저장되지 않은 변경 사항이 손실된다는 경고가 표시됩니다.

**상위 항목:**[&#x200B;웹 편집기 작업](web-editor.md)

