---
title: 콘텐츠를 작성할 AI 기반 스마트 제안
description: 웹 편집기에서 AI 기반 스마트 제안을 보고 활용하는 방법에 대해 알아봅니다.
source-git-commit: eea4a30b91fd5c28647fd7ea95dd8058ec411adc
workflow-type: tm+mt
source-wordcount: '748'
ht-degree: 0%

---



# 콘텐츠를 작성할 AI 기반 스마트 제안

Experience Manager 안내서에서는 **스마트 제안** 일관되고 정확한 콘텐츠를 만드는 데 도움이 되는 기능입니다.

콘텐츠를 작성하는 동안 **스마트 제안** 기능은 AI를 사용하여 검색하고 콘텐츠와 의미상 유사한 기존 콘텐츠를 표시할 수 있습니다. 그런 다음 현재 주제에 참조로 포함할 가장 일치하는 콘텐츠를 선택할 수 있습니다.

이렇게 하면 설명서 저장소의 기존 콘텐츠를 재사용하고 일관된 콘텐츠를 만들 수 있습니다. 예를 들어 다음 정보가 포함된 문서를 만들 수 있습니다 **Adobe Firefly**, 다음에 대한 단락 포함 **Adobe**. 이 경우 다음과 같은 다른 주제의 콘텐츠 참조를 빠르게 보고 추가할 수 있습니다. **Adobe Photoshop**: 동일한 단락을 포함합니다.





웹 편집기에서 항목을 열면 **스마트 제안** 오른쪽에 패널이 나타납니다.

>[!NOTE]
>
> 관리자가 다음을 구성해야 합니다. **스마트 제안** 기능. 자세한 내용은 [작성을 위한 AI 기반 스마트 제안 구성](../cs-install-guide/conf-smart-suggestions.md) Cloud Service을 위한 설치 및 구성 안내서의 섹션.

![스마트 제안 패널](images/smart-suggestions-panel.png){width="300" align="left"}

*보기&#x200B;**스마트 제안**패널.*

주제에 적절한 콘텐츠 참조를 추가하기 위한 스마트 제안을 보려면 다음 단계를 수행하십시오.

1. 선택 **스마트 제안** ![스마트 제안 아이콘](images/smart-suggestions-icon.svg) 패널을 엽니다.



   >[!NOTE]
   >
   > 다음에서 [전역 또는 폴더 수준 프로필](../cs-install-guide/conf-folder-level.md#conf-ai-smart-suggestions), 관리자는 스마트 제안에 대해 색인화할 파일 또는 폴더, 제안을 보기 위해 입력해야 하는 최소 문자 수 및 목록에서 볼 수 있는 최대 제안 수를 정의해야 합니다.

1. 관련 제안을 보려면 주제에 내용을 입력합니다. 콘텐츠의 문자 길이가 관리자가 콘텐츠 제안을 표시하기 위해 폴더 프로필에서 설정한 길이보다 길어야 합니다.

1. 선택 **현재 태그에 대한 제안 사항** ![스마트 제안 현재 태그 아이콘](images/smart-suggestions-current-tag-icon.svg) 마우스 포인터를 놓은 현재 태그에 대한 작성 제안을 보려면 다음과 같이 하십시오.  인덱싱된 파일에서 콘텐츠 참조를 보고 추가하는 제안은 현재 태그의 콘텐츠를 기반으로 표시됩니다.

   키보드 단축키: **Windows** (*Ctrl* + *K*),  **macOS** (*명령* + *K*)
1. 선택 **전체 문서에 대한 제안 사항**  ![스마트 제안 완료 문서 아이콘](images/smart-suggestions-complete-document-icon.svg) 전체 문서에 있는 내용을 기반으로 제안을 봅니다.  현명한 제안![스마트 제안 아이콘](images/smart-suggestions-complete-document-icon.svg) 적절한 일치 항목이 발견된 콘텐츠 옆에 아이콘이 표시됩니다.

   키보드 단축키: **Windows** ( *Ctrl* + *Shift* +  *K* ),  **macOS** (*명령* + *Shift* + *K* )

   >[!NOTE]
   >
   > 현재 뷰포트(화면에 표시되는 콘텐츠)에 대한 제안만 볼 수 있습니다. 문서의 다른 컨텐츠에 대한 제안을 보려면 위 또는 아래로 스크롤하여 뷰포트에 표시한 다음 ![스마트 제안 아이콘](images/smart-suggestions-complete-document-icon.svg) 아이콘 을 클릭하여 제품에서 사용할 수 있습니다.

1. 다음 항목 선택 **스마트 제안** ![스마트 제안 아이콘](images/smart-suggestions-complete-document-icon.svg) 아이콘을 클릭하면 문서에 추가하여 스마트 제안을 볼 수 있습니다.
1. 에서 스마트 제안을 볼 수 있습니다. **콘텐츠 재사용** 제안 상자.  Experience Manager 안내서에서는 동일한 의미를 갖는 콘텐츠와 콘텐츠를 정확히 일치시키기 위한 제안을 제공합니다. 예를 들어 &quot;릴리스 버전 2023.03.12&quot;와 같은 정확한 버전 번호가 포함된 주제를 검색할 수 있습니다. 또한 &quot;Adobe은 캘리포니아 주 산호세에 본사가 있습니다&quot;를 검색하고 &quot;산호세에는 Adobe과 같은 많은 소프트웨어 회사의 4분의 1이 있습니다&quot;와 같은 유사한 콘텐츠를 찾을 수 있습니다.
1. 선택 **컨텐츠 정보** ![컨텐츠 정보](images/smart-suggestions-content-info-icon.svg) 을 눌러 세부 정보를 봅니다.
   ![컨텐츠 정보 패널](images/smart-suggestions-content-information.png){width="300" align="left"}

   *콘텐츠 참조에 대한 자세한 정보를 봅니다.*

   1. 컨텐트 참조가 포함된 주제의 제목이 하이퍼링크로 표시됩니다.
   1. 콘텐츠 참조가 포함된 파일의 경로입니다.
   1. 콘텐츠가 참조되는 참조 유형입니다.
   1. 주제가 참조되는 DITA 파일의 이름은 하이퍼링크로 표시됩니다.
1. 선택 **제안된 콘텐츠 미리보기** ![스마트 제안 미리 보기 아이콘](images/smart-suggestions-preview-icon.svg) 현재 콘텐츠와 제안된 콘텐츠를 비교할 수 있습니다. 이렇게 하면 차이점을 비교하고 제안된 콘텐츠에 대한 콘텐츠 참조를 추가하고 일관되게 유지하거나 현재 콘텐츠를 유지할 것인지 여부를 결정하는 데 도움이 됩니다.

   ![제안된 콘텐츠 미리보기](images/smart-suggestions-suggested-content-preview.png){width="800" align="left"}

   *현재 콘텐츠와 제안된 콘텐츠 간의 비교를 미리 봅니다.*

1. 클릭 **Accept** 에 제안된 콘텐츠 참조를 추가하려면 **제안된 콘텐츠 미리보기** 대화 상자.
1. 다음을 선택할 수도 있습니다. **Accept** 또는 **거절** 다음에서 **콘텐츠 재사용** 제안 상자 를 참조하십시오.



이 지능형 기능은 편리하고 수동 콘텐츠 검색의 노력을 최소화하여 새 콘텐츠 생성에 더 집중할 수 있습니다. 또한 팀 공동 작업을 개선하고 다양한 작성자가 만든 콘텐츠의 일관성을 유지하는 데 도움이 됩니다.

