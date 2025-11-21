---
title: 기본 PDF | PDF 출력 생성
description: 기본 PDF 게시를 사용하고, PDF 출력 사전 설정을 만들고, 기본 PDF 출력을 생성한 후 임시 파일을 다운로드하고, Adobe Experience Manager Guides에서 언어 변수를 사용하는 방법에 대해 알아봅니다.
exl-id: ec3d59b7-1dda-4fd1-848e-21d8a36ff5e4
feature: Publishing, Native PDF Output
role: User
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '3232'
ht-degree: 1%

---

# 기본 PDF 출력 사전 설정

컨텐츠를 작성할 때 컨텐츠가 보기, 편집 및 인쇄에 최적화되도록 하는 것이 필수적입니다. 컨텐츠 스타일링을 위한 W3C CSS3와 같은 표준과 크기, 여백, 방향, 페이지 나누기, 머리글, 바닥글 및 페이지 번호 매기기 같은 페이지 정의 속성에 대한 CSS 페이지 미디어 표준을 사용하여 일관성과 유용성을 보장하는 PDF 문서의 보기 및 레이아웃을 설정할 수 있습니다. 기본 PDF 게시 기능은 이러한 표준을 사용하여 PDF을 생성합니다.

기본 PDF 게시를 사용하면 사전 정의된 템플릿을 사용하여 콘텐츠 레이아웃 및 구조의 일관성을 보장하고, 스타일시트를 적용하여 출력의 디자인을 변경하고, PDF을 최적화하고, 프린터 표시를 설정하고, 화면 판독기 지원을 허용하고, PDF의 호환성을 설정하고, 글꼴을 포함하는 등의 작업을 수행할 수 있습니다.

기본 PDF 게시를 사용하여 PDF을 생성하는 방법에는 두 가지 측면이 있습니다.

* 템플릿을 사용하여 콘텐츠에 스타일을 적용하고, 페이지 레이아웃을 설정하고, 다양한 설정을 적용하여 PDF을 미세 조정할 수 있습니다. 작성자는 제공된 샘플 템플릿을 사용/수정하거나 사용자 지정 템플릿을 만들 수 있으며 게시자 및 개발자가 사용하는 고급 구성 옵션을 설정할 수 있습니다.

* PDF 설정을 제어하기 위한 PDF 출력 사전 설정을 만들거나 구성합니다. PDF 출력 사전 설정을 만들면 PDF을 생성할 수 있습니다.

## 출력 사전 설정 만들기

맵 콘솔에서 PDF 사전 설정을 만들려면 다음 단계를 수행하십시오.

1. [맵 콘솔에서 DITA 맵 파일을 엽니다](../user-guide/open-files-map-console.md).

   **개요 섹션**&#x200B;의 [최근 파일](../user-guide/intro-home-page.md#overview) 위젯에서 맵 파일에 액세스할 수도 있습니다. 선택한 맵 파일이 맵 콘솔에서 열립니다.
1. **출력 사전 설정** 탭에서 + 아이콘을 선택하여 출력 사전 설정을 만듭니다.
1. **새 출력 사전 설정** 대화 상자의 유형 드롭다운에서 **PDF**&#x200B;을(를) 선택합니다.
1. **이름** 필드에서 이 사전 설정의 이름을 입력하십시오.
1. **다음을 사용하여 PDF 생성** 필드에서 **Native-PDF**&#x200B;을(를) 선택합니다.
1. **현재 폴더 프로필에 추가** 옵션을 선택하여 현재 폴더 프로필 내에 출력 사전 설정을 만듭니다. ![폴더 프로필 아이콘](./assets/global-preset-icon.svg)은(는) 폴더 프로필 수준의 사전 설정을 나타냅니다.

   [전역 및 폴더 프로필 출력 사전 설정 관리](../user-guide/web-editor-manage-output-presets.md)에 대해 자세히 알아보세요.

1. **추가**&#x200B;를 선택합니다.

   PDF용 사전 설정이 생성됩니다.

## 기본 PDF 사전 설정 구성

사전 설정이 만들어지면 기본 PDF 사전 설정 설정을 구성합니다. DITA-OT에 대한 사전 설정 구성 옵션은 **일반**, **메타데이터**, **레이아웃**, **보안**, **인쇄** 및 **고급** 탭에서 구성됩니다.

<img src="assets/preset-panel-new.png" alt="사전 설정 패널" width="800">

**일반**

출력 경로, PDF 파일 이름 지정 등과 같은 기본 출력 설정을 지정하는 데 사용합니다.

| 설정 | 설명 |
| --- | --- |
| **출력 경로** | PDF 출력이 저장되는 AEM 저장소 내의 경로입니다. 출력 경로가 프로젝트 폴더 내에 있지 않은지 확인하십시오. 출력 경로는 관리자가 구성한 변수 `${base_output_path}`을(를) 통해 설정됩니다. 출력 경로를 구성하려면 사용 중인 서비스에 따라 [클라우드 서비스에 대한 기본 출력 위치 구성](../native-pdf/configure-base-location-cs.md) 또는 [온프레미스 서비스에 대한 기본 출력 위치 구성](../native-pdf/configure-base-output-location.md)을 봅니다. <br>다음 기본 변수를 사용하여 출력 경로를 정의할 수도 있습니다. 단일 또는 변수 조합을 사용하여 이 옵션을 정의할 수 있습니다. <br> `${map_filename}`: DITA 맵 파일 이름을 사용하여 대상 경로를 만듭니다. <br> `${map_title}`: DITA 맵 제목을 사용하여 대상 경로를 만듭니다. <br>`${preset_name}`: 출력 사전 설정 이름을 사용하여 대상 경로를 만듭니다. <br> `${language_code}`: 맵 파일이 있는 언어 코드를 사용하여 대상 경로를 만듭니다. <br> `${map_parentpath}`: 맵 파일의 전체 경로를 사용하여 대상 경로를 만듭니다.  <br>`${path_after_langfolder}`: 언어 폴더 뒤에 있는 맵 파일의 경로를 사용하여 대상 경로를 만듭니다. |
| **PDF 파일** | PDF을 저장할 파일 이름을 지정합니다. 기본적으로 PDF 파일 이름은 사전 설정 이름과 함께 DITA 맵 이름을 추가합니다. 예를 들어 ditamap은 &#39;TestMap&#39;이고 사전 설정 이름은 &#39;preset1&#39;이며 pdf의 기본 이름은 &#39;TestMap_preset1.pdf&#39;가 됩니다. <br>다음의 기본 변수를 사용하여 PDF 파일을 정의할 수도 있습니다. 단일 또는 변수 조합을 사용하여 이 옵션을 정의할 수 있습니다. <br>`${map_filename}`<br>`${map_title}`<br>`${preset_name}` <br> `${language_code}` |
| **다음을 사용하여 조건 적용** | 조건화된 콘텐츠의 경우 아래 옵션 중 하나를 선택하여 해당 조건을 기반으로 PDF 출력을 생성합니다. <br><ul> <li> **적용되지 않음** 맵과 소스 콘텐츠에 조건을 적용하지 않으려면 이 옵션을 선택하십시오. <br><li> **DITAVAL 파일** 조건부 콘텐츠를 생성할 DITAVAL 파일을 선택하십시오. 찾아보기 대화 상자를 사용하거나 파일 경로를 수동으로 입력하여 여러 DITAVAL 파일을 선택할 수 있습니다. 선택한 파일을 제거하려면 해당 이름 옆에 있는 교차 아이콘을 클릭합니다. 잘못된 파일을 선택하면 **잘못된 DITAVAL 파일이 선택되었습니다**. <br> <br>각 DITAVAL 파일에는 필터링 조건 및 플래그 스타일 등 다양한 속성이 포함될 수 있습니다. 플래그 지정을 사용하면 시작 및 종료 플래그를 사용하여 콘텐츠를 시각적으로 표시할 수 있습니다. 시작 플래그에는 이미지 또는 볼드체 또는 기울임체 등의 텍스트 서식이 포함될 수 있습니다. 조건이 겹치거나 스타일이 충돌하는 경우 스타일 충돌 설정을 사용하여 배경색을 정의할 수 있습니다. 자세한 내용은 [DITAVAL 편집기 사용](../user-guide/ditaval-editor.md).<br>을 참조하세요.<li> **조건 사전 설정** 출력을 게시하는 동안 조건을 적용하려면 드롭다운에서 조건 사전 설정을 선택합니다. 이 옵션은 DITA 맵 파일에 대한 조건을 추가한 경우에 표시됩니다. 조건부 설정은 DITA 맵 콘솔의 조건 사전 설정 탭에서 사용할 수 있습니다. 조건 사전 설정에 대해 자세히 알아보려면 [조건 사전 설정 사용](https://help.adobe.com/en_US/xml-documentation-for-adobe-experience-manager/index.html#t=DXML-master-map%2Fgenerate-output-use-condition-presets.html)을 확인하십시오. <br> </ul> |
| **기준선 사용** | 선택한 DITA 맵에 대한 베이스라인을 생성한 경우 이 옵션을 선택하여 게시할 버전을 지정합니다. 자세한 내용은 [기준선으로 작업](https://help.adobe.com/en_US/xml-documentation-for-adobe-experience-manager/index.html#t=DXML-master-map%2Fgenerate-output-use-baseline-for-publishing.html)을 참조하세요. |
| **게시된 버전 사이에 변경 막대를 사용하여 PDF 만들기** | 다음 옵션을 사용하여 변경 막대를 사용하는 두 버전 간의 콘텐츠 차이를 보여주는 PDF을 만듭니다.   <br><ul><li> **이전 버전의 기준 요소** 현재 버전 또는 다른 기준 요소와 비교할 기준 요소 버전을 선택합니다. PDF에 수정된 콘텐츠를 나타내는 변경 표시줄이 나타납니다. 변경 막대는 새 콘텐츠 또는 수정된 콘텐츠를 시각적으로 식별하는 세로선입니다. 삽입, 변경 또는 삭제된 콘텐츠의 왼쪽에 변경 막대가 표시됩니다. <br> **참고**: **기준선 사용**&#x200B;을 선택하고 게시할 기준선을 선택하면 선택한 두 기준선 버전 간에 비교가 수행됩니다. 예를 들어, **기준 요소 사용**&#x200B;에서 기준 요소 버전 1.3을 선택하고 **이전 버전의 기준 요소**&#x200B;에서 버전 1.1을 선택하면 기준 요소 버전 1.1과 기준 요소 버전 1.3 간의 비교가 수행됩니다. <br><li> **추가된 텍스트 표시** 삽입된 텍스트를 녹색 및 밑줄로 표시하려면 선택합니다. 이 옵션은 기본적으로 선택되어 있습니다. <br> <li> **삭제된 텍스트 표시** 삭제된 텍스트를 빨간색으로 표시하고 취소선으로 표시하려면 선택합니다. 이 옵션은 기본적으로 선택되어 있습니다. <br>**참고** 스타일시트를 사용하여 변경 막대, 삽입된 콘텐츠 또는 삭제된 콘텐츠의 스타일을 사용자 지정할 수도 있습니다.<br></ul> |
| **사후 생성 워크플로** | AEM에 구성된 모든 워크플로가 포함된 드롭다운 목록을 표시하려면 선택하십시오. PDF 생성 워크플로우가 완료된 후 실행할 워크플로우를 선택할 수 있습니다. |

**메타데이터**

메타데이터는 콘텐츠에 대한 설명 또는 정의입니다. 메타데이터는 콘텐츠 관리에 도움이 되며 인터넷에서 파일을 검색하는 데 도움이 됩니다.

메타데이터 탭을 사용하여 작성자 이름, 문서 제목, 키워드, 저작권 정보 및 PDF 출력에 대한 기타 데이터 필드와 같은 메타데이터 필드를 설정합니다. PDF 출력에 대한 사용자 지정 메타데이터를 추가할 수도 있습니다.

이 메타데이터는 출력 PDF의 **문서 속성**&#x200B;에 있는 **설명** 탭의 메타데이터에 매핑됩니다.



<img src="assets/pdf-metadata.png" alt="메타데이터 탭" width="600">

[출력] 사전 설정에서 **PDF** > **Native-PDF** > **메타데이터**&#x200B;를 선택하여 메타데이터 옵션을 추가하고 사용자 지정합니다.
* **topicmeta에 추가된 메타데이터 사용**

  이 옵션은 기본적으로 선택되어 있습니다. DITA 맵의 topicmeta 요소에 추가한 메타데이터를 사용하여 PDF 출력의 메타데이터 필드를 채울 수 있습니다.

* **XMP 파일 제공**

  [XMP](https://www.adobe.com/products/xmp.html)&#x200B;(Extensible Metadata Platform) 파일을 가져와서 메타데이터 필드를 직접 채울 수도 있습니다. 여기에서 샘플 XMP 파일을 다운로드할 수 있습니다.

[다운로드](assets/SampleXMP.xmp)

  또는 Adobe Acrobat을 사용하여 XMP 파일을 생성할 수 있습니다.
   1. Acrobat에서 **파일** > **속성**&#x200B;을 선택합니다.
   1. **설명**&#x200B;에서 **추가 메타데이터**&#x200B;를 선택합니다.
   1. 왼쪽 패널에서 **고급**&#x200B;을 선택합니다.
   1. **저장**&#x200B;을 선택합니다.

  XMP 파일이 장치에 저장됩니다.

* **메타데이터 이름 및 값 제공**

   1. 드롭다운에서 을 선택하여 이름을 추가하거나 이름 필드에 직접 입력하여 사용자 지정 메타데이터를 추가합니다.
   1. 메타데이터 값을 입력하고 &#39;+&#39; 아이콘을 선택합니다.
메타데이터가 PDF의 메타데이터 목록에 추가됩니다.

변수를 사용하여 메타데이터 값을 정의할 수도 있습니다.  DITA 맵 또는 북맵 파일에 대해 정의된 메타데이터를 변수로 사용할 수 있습니다. 메타데이터는 DITA 맵 또는 북맵 파일의 `/jcr:content/metadata` 노드에서 찾을 수 있습니다.
변수를 사용하는 경우 메타데이터 속성에서 해당 값이 선택됩니다.

변수를 사용하려면 `${<variable>}` 형식으로 정의해야 합니다.

예를 들어 /`jcr:content/metadata` 노드에 정의된 메타데이터 속성 중 하나는
`dc:title`. `${dc:title}`을(를) 지정할 수 있으며 제목 값은 최종 출력에서 사용됩니다.

단일 또는 변수 조합을 사용하여 메타데이터를 정의할 수 있습니다. 예를 들어, `${dc:title} ${dc:docstate}`과 같이 입력합니다. 변수와 문자열의 조합을 사용할 수도 있습니다.  예: `View ${dc:title} in ${dc:language}`

언어 변수를 사용하여 메타데이터 속성의 지역화된 값을 정의합니다. 선택한 언어에 따라 현지화된 값이 PDF 출력에서 자동으로 선택됩니다. 예를 들어, 영어로 &quot;Author&quot;를 메타데이터 값으로, 독일어로 &quot;Autorin&quot;을 인쇄할 수 있습니다.

형식: `${lng:<variable name>}`. 예를 들어 `${lng:author-label}`입니다. 여기서 `author-label`은(는) 언어 변수입니다.

마우스로 가리키기 자세한 내용을 보기 위한 옵션 근처 <img src="./assets/info-details.svg" alt= "정보 아이콘" width="25">.


**레이아웃**

를 사용하여 페이지 레이아웃을 설정하고 페이지 표시 및 확대/축소 수준 설정과 같은 PDF 출력에 대한 페이지 보기 옵션을 지정합니다.

| 설정 | 설명 |
| --- | --- |
| **PDF 템플릿** | PDF 템플릿은 페이지 레이아웃을 정의하고, 컨텐츠 스타일을 지정하며, PDF 출력에 다양한 설정을 적용할 수 있는 명확한 구조를 제공합니다. PDF 템플릿 드롭다운 옵션에서 을(를) 선택하여 선호하는 템플릿을 선택합니다. <br> **템플릿 찾아보기**&#x200B;를 선택할 수도 있습니다. 템플릿을 선택하려면 <img src="./assets/browse-templates-icon.svg"  alt= "템플릿 찾아보기 아이콘" width="25">하세요. **PDF 템플릿 선택** 대화 상자에서 썸네일을 미리 보고 선택한 템플릿의 제목과 설명을 볼 수도 있습니다. |
| **페이지 표시** | PDF이 열릴 때 표시되는 방식을 보여 주는 페이지 보기용 페이지 표시를 사용합니다. 페이지 표시 드롭다운 옵션에서 을(를) 선택하여 기본 보기를 선택합니다. <br><ul><li> **기본값** 사용자 컴퓨터에서 PDF 뷰어의 기본 설정에 따라 표시됩니다.  <br> <li> **단일 페이지 보기**&#x200B;는 한 번에 한 페이지씩 표시됩니다.   <br> <li> **단일 페이지 스크롤** 연속 세로 열에 단일 페이지를 표시합니다.  <br> <li> **두 페이지 보기**&#x200B;에는 한 번에 두 페이지 분기가 나란히 표시됩니다. .<br> <li> **두 페이지 스크롤** 연속 스크롤과 함께 두 페이지 스프레드를 나란히 표시합니다. </ul> |
| **확대/축소** | PDF이 열릴 때 표시되는 방식을 보여 주는 페이지 보기 크기를 조정하려면 선택합니다.  <br><ul><li> **기본값** 사용자 컴퓨터에서 PDF 뷰어의 기본 설정에 따라 표시됩니다.    <br> <li> **100%** 페이지를 실제 크기로 표시합니다.     <br> <li> **페이지 맞춤** 페이지 너비와 높이를 문서 창에 맞춥니다.   .<br> <li> **페이지 너비 맞추기** 페이지 너비를 문서 창의 너비로 채웁니다.  <br> <li> **페이지 높이 맞추기** 페이지 높이를 문서 창의 높이로 채웁니다. </ul> |

**보안**

파일을 열고 읽기 위한 제한 사항을 추가하여 PDF을 보호합니다. 아래 옵션을 사용하여 승인되지 않은 액세스를 방지하십시오.

| 설정 | 설명 |
| --- | --- |
| **문서를 열 암호 설정** | PDF 파일을 보려면 보안 암호를 추가하려면 선택하십시오. **사용자 암호** 필드에 암호를 지정하십시오. 사용자는 이 필드에 제공된 암호를 입력해야만 PDF을 열 수 있습니다. |
| **문서 제한 설정** | 사용자가 PDF과 상호 작용하는 방법을 제한하려면 선택합니다. 아래 제한 설정을 사용하려면 **소유자 암호** 필드에 암호를 지정하십시오.  <br><ul><li> **인쇄** 사용자가 PDF을 인쇄할 수 있도록 하려면 선택합니다. <br> <li> **초안 품질 인쇄** 사용자가 더 낮은 해상도로 PDF을 인쇄할 수 있도록 하려면 선택합니다.  <br> <li> **컨텐츠 복사** 사용자가 PDF에서 컨텐츠를 복사할 수 있도록 하려면 선택합니다.   <br> <li> **주석** 사용자가 PDF에서 메모 또는 댓글을 추가할 수 있도록 하려면 선택하십시오. <br> <li> **콘텐츠 수정** 사용자가 PDF에서 콘텐츠를 변경할 수 있도록 하려면 선택합니다. <br> <li> **접근성을 위한 콘텐츠 복사** 화면 판독기에서 PDF의 콘텐츠를 읽고 탐색할 수 있도록 하려면 선택하십시오. <br>  **문서 어셈블리** 사용자가 PDF에 페이지를 삽입할 수 있도록 하려면 선택하십시오. <br> **참고**: 사용자가 Adobe Acrobat의 파일 > 속성에서 제한을 변경하려면 소유자 암호를 입력해야 합니다. |

**인쇄**

>[!NOTE]
>
> Experience Manager Guides 5.0/2025.02.0 릴리스부터 인쇄 섹션은 이제 **기본 PDF 출력 사전 설정**&#x200B;의 일부입니다. 인쇄 설정이 저장된 기존 템플릿의 경우 인쇄 데이터는 그대로 유지되지만 출력 중에 더 이상 UI에 나타나거나 적용되지 않습니다. 이러한 설정을 계속 사용하려면 기본 PDF 출력 사전 설정 내에서 다시 구성해야 합니다.

프린터 표시를 할당하고, 색상 모델을 선택하고, PDF 출력 인쇄와 관련된 속성을 지정하도록 인쇄 프로덕션 설정을 구성합니다.

* **프린터 표시**: 인쇄 제작을 위해 문서를 준비하면 인쇄 중에 적절한 정렬, 트리밍 및 색상 선택을 돕기 위해 프린터 표시가 페이지 경계에 추가됩니다. 프린터 표시를 선택하면 인쇄 중에 잘리는 표시를 수용하도록 페이지 경계가 확장됩니다. PDF 출력에 다음 프린터 표시를 표시하도록 선택할 수 있습니다.
   * **재단선**: 인쇄 후 용지를 재단해야 하는 위치를 나타내기 위해 재단선 영역의 각 모서리에 표시를 배치하려면 옵션을 선택합니다.
   * **재단 물림 표시**: 재단 물림 상자의 각 모서리에 표시를 배치하여 확장된 이미지의 재단 영역을 나타내려면 선택합니다.
   * **등록 표시**: 색상 문서에서 다른 분판을 정렬하기 위해 자르기 영역 밖에 표시를 배치하려면 선택합니다.
   * **색상 막대**: 인쇄 시 색상 일관성을 유지하고 잉크 밀도를 조정하려면 트리밍 영역 외부에 색상 스트립을 추가합니다.

  **선 너비**, **선 색상** 및 **재단 물림 상자 너비** 옵션을 사용하여 선택한 프린터 표시의 치수를 설정하십시오.

* **미디어 상자 크기**: 프린터 표시에서 차지하는 확장된 영역을 포함한 전체 페이지 크기입니다. 드롭다운 옵션을 사용하여 PDF 출력에 대한 페이지 크기를 선택하거나 사용자 지정 크기를 만듭니다.

* **색상 공간**: RGB 또는 CMYK 색상 공간 중에서 선택하여 PDF 문서를 인쇄할 수 있는 옵션이 제공됩니다. 생성된 PDF을 디지털 방식으로 표시하려면 RGB을 선택하고 실제 인쇄를 위해 CMYK를 선택합니다. 문서에 정의된 색상이 선택한 색상 공간으로 변환됩니다.

* **ICC 프로필**: 여기서는 ICC 프로필을 지정하여 장치 간 색상 정확도를 관리할 수 있습니다. 이렇게 하면 인쇄된 출력에서 일관된 색상 렌더링이 보장됩니다.

이 설정을 구성하려면 서버에서 ICC 프로파일 파일 경로를 지정하고 쉽게 식별할 수 있도록 ICC 프로파일 이름을 제공합니다. 또는 ICC 프로파일이 온라인에 저장된 경우 파일 경로 대신 URL을 제공할 수 있습니다.

>[!NOTE]
>
> CMYK 색상 공간을 사용하는 경우 PDF/A를 만들려면 ICC 색상 프로파일이 필요합니다.

<!--For more information on applying these print settings, see *Printing preferences*.-->

**고급**

다음 옵션을 사용하여 PDF를 병합하는 고급 설정을 지정하고, 압축을 사용하고, 준수 표준을 선택하는 등의 작업을 수행합니다.

| 설정 | 설명 |
| --- | --- |
| **액세스 가능한(태그가 지정된) PDF 만들기** | 태그를 사용하여 PDF을 생성하려면 이 옵션을 선택합니다. 태그가 지정된 PDF을 사용하면 화면 판독기에서 컨텐츠, 하이퍼링크, 책갈피 등을 보다 쉽게 읽고 탐색할 수 있습니다. 예를 들어 표에 태그가 지정되어 있으면 화면 판독기는 표와 텍스트만 읽는 것이 아니라 표를 읽는 것임을 알 수 있습니다. |
| **목차에 포함된 PDF 병합** | 기존 PDF를 DITA 맵에 리소스 파일로 추가하여 출력에 병합하려면 이 옵션을 선택합니다. PDF는 맵에 표시된 위치에 삽입되며 그에 따라 페이지가 증가합니다. |
| **사용된 글꼴 포함** | 최종 사용자의 컴퓨터에 설치할 수 없는 글꼴을 사용할 경우 이 옵션을 선택합니다. 이 옵션을 선택하면 사용된 글꼴이 PDF에 포함되므로, 글꼴이 컴퓨터에 설치되어 있지 않더라도 사용자가 의도한 대로 PDF을 볼 수 있습니다. <br> **참고**: 글꼴을 포함할 수 있는 글꼴 공급업체의 설정이 포함된 경우에만 글꼴을 포함할 수 있습니다. 글꼴을 포함하기 전에 필요한 설정이나 라이선스가 있는지 확인하십시오. |
| **자동 하이픈 넣기 사용** | 자동 하이픈이 활성화되면 문법적으로 올바른 위치에 하이픈이 있는 줄 끝에 있는 단어가 구분됩니다. |
| **JavaScript 사용** | PDF을 생성하기 전에 콘텐츠를 동적으로 변환하는 데 사용할 JavaScript 코드가 있는 경우 이 옵션을 활성화합니다. |
| **멀티미디어 파일 포함** | 오디오, 비디오 및 대화형 컨텐츠를 PDF에 포함하려면 이 옵션을 선택합니다. |
| **전체 압축을 사용하여 PDF 크기를 최적화합니다** | 대형 PDF의 크기를 압축/줄이려면 이 옵션을 선택합니다. PDF을 압축하면 파일 품질이 저하될 수 있습니다. |
| **이미지 압축을 사용하여 PDF 크기를 최적화합니다** | PDF에서 사용된 이미지 크기를 압축/줄이려면 이 옵션을 선택합니다. 이미지를 압축하면 이미지 품질이 저하될 수 있습니다. |
| **사용자 지정 해상도 사용(인치당 픽셀 수)** | 인치당 픽셀 단위의 페이지 표시 해상도입니다. 이 옵션을 선택할 때 나타나는 필드에 원하는 값을 입력합니다. 기본값은 인치당 96픽셀입니다. 더 많은 컨텐츠를 1인치에 맞추려면 더 높은 값을 설정하고, 더 낮은 값을 설정하면 그 반대의 경우도 마찬가지입니다. |
| **워터마크 표시** | 출력에 워터마크를 중첩하려면 이 옵션을 선택합니다. 텍스트 상자에 원하는 방식으로 문자를 사용하여 새 텍스트 문자열을 입력할 수 있습니다. <br><br>정적 텍스트 또는 언어 변수를 사용하여 워터마크의 지역화된 버전을 게시합니다.  선택한 언어에 따라 현지화된 값이 PDF 출력에서 자동으로 선택됩니다. 예를 들어 &#39;Publisher&#39;는 영어로, &#39;Auteure&#39;는 프랑스어로 워터마크로 인쇄할 수 있습니다.  <br> 형식: `${lng:<variable name>}`. 예를 들어 `$ {lng:publisher-label}`입니다. 여기서 `publisher-label`은(는) 언어 변수입니다. <br> 가리키기 자세한 내용을 보기 위한 옵션 근처 <img src="./assets/info-details.svg" alt= "정보 아이콘" width="25">. |
| **MathML 방정식 사용** | 콘텐츠에 있는 MathML 방정식을 렌더링하려면 이 옵션을 선택합니다. 그렇지 않으면 기본적으로 방정식이 무시됩니다. |
| **대화형 PDF 양식 만들기** | 생성된 PDF 출력에서 향상된 사용자 입력을 위해 대화형 및 사용자 지정 가능한 PDF 양식 필드를 포함하려면 이 옵션을 선택합니다. |
| **트랙 변경 내용 포함** | 간편한 검토 및 비교를 위해 생성된 PDF에서 추적된 변경 사항을 포함하려면 이 옵션을 선택합니다. |
| **임시 파일 유지** | 기본 PDF 출력을 생성하는 동안 생성된 임시 HTML 파일을 유지하려면 이 옵션을 선택합니다. 출력을 생성한 후 나중에 임시 파일을 다운로드할 수 있습니다. 다운로드한 파일에는 작성자 URL, 로컬 URL 및 게시 URL에 대한 정보를 제공하는 `system_config.xml` 파일도 포함됩니다. 이러한 URL은 AEM 외부화 설정에 구성되어 `system_config.xml` 파일에 반영됩니다. |
| **PDF 적합성** | PDF이 준수되는지 확인하기 위해 저장하려는 표준입니다. 드롭다운에서 을(를) 선택하여 사용 가능한 PDF 표준 목록에서 을(를) 선택합니다. 지원되는 표준에 대한 자세한 내용은 [PDF 표준 정보](https://helpx.adobe.com/acrobat/using/pdf-conversion-settings.html#about_pdf_x_pdf_e_and_pdf_a_standards)를 참조하십시오. |
| **파일 속성** | 기본 PDF 게시로 전달할 메타데이터를 선택합니다. 드롭다운에 사용자 지정 및 기본 속성이 모두 나열됩니다. 예를 들어 `dc:description`, `dc:language`, `dc:title` 및 `docstate`은(는) 기본 속성이지만 `author`을(를) 사용자 지정 속성으로 가질 수 있습니다. 선택한 메타데이터 속성은 기본 PDF을 사용하여 생성된 PDF 파일로 전달됩니다. <br> 다음 위치에 있는 `metadataList` 파일에서 이러한 속성을 선택합니다.`/libs/fmdita/config/metadataList`. <br>이 파일은 `/apps/fmdita/config/metadataList`에 오버레이할 수 있습니다. |



<!--------------


### Additional notes for PDF output

**Download temporary files after generating the Native PDF output**

If you select the **Download temporary files** option in the Advanced settings, you can also download the interim HTML files created while generating the Native PDF output. Once you've generated the output, you can download the temporary files using the **Download temporary files** ![download temporary files](assets/native-pdf-download-temporary-files-icon.svg)icon on the top bar. This feature helps you view your interim HTML styles and layouts and helps you correct or change your CSS styles according to your requirements.


>[!NOTE]
>
> The **Download temporary files**  ![download temporary files](assets/native-pdf-download-temporary-files-icon.svg) icon appears only if you have generated the last PDF output using the preset wherein you have selected the option in the **Advanced** tab. 


**Use language variables**

AEM Guides also provides the support for language variables. Select **Language Variables** <img src="assets/language-variables.svg" width="25">  in the left panel to define a localized version of the out-of-the-box labels like Note, Caution, and Warning or static text in the PDF output. For more details, view [Support for language variables](../native-pdf/native-pdf-language-variables.md).


**Support for Markdown documents**

Experience Manager Guides also provides support for your Markdown documents.  Markdown files are easy to author and also provide a variety of formatting options. Learn how to [author Markdown documents from the Editor](../user-guide/web-editor-markdown-topic.md). 

You can add the Markdown topics to your DITA map and generate the PDF output using the Native PDF output presets.  Learn how to configure or [create a PDF output preset](#create-a-pdf-output-preset-create-output-preset). 

--------------->