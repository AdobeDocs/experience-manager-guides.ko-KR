---
title: DITA-OT를 사용하여 메타데이터를 출력에 전달
description: AEM Guides에서 DITA-OT 게시를 사용하여 메타데이터를 출력에 전달하는 방법을 알아봅니다.
feature: Publishing, Metadata Management
role: User
source-git-commit: 76c731c6a0e496b5b1237b9b9fb84adda8fa8a92
workflow-type: tm+mt
source-wordcount: '305'
ht-degree: 0%

---

# DITA-OT를 사용하여 메타데이터를 출력에 전달 {#id21BJ00QD0XA}

메타데이터는 출력에 대한 추가 정보입니다. AEM Guides에서 기존 메타데이터를 전달하거나 사용자 지정 메타데이터 태그를 만들 수 있습니다. DITA-OT 게시를 사용하여 AEM, PDF, HTML 5, EPUB 및 사용자 지정 형식 출력으로 메타데이터를 전달할 수 있습니다.

DITA-OT 게시를 사용하여 메타데이터를 출력에 전달하려면 다음 단계를 수행합니다.

1. **Assets UI**&#x200B;에서 메타데이터를 DITA-OT에 전달할 DITA 맵 파일로 이동하여 클릭합니다.
1. 메타데이터 필드를 전달할 출력 사전 설정을 선택하고 편집합니다. 예를 들어 PDF 출력 사전 설정을 선택합니다.
1. 선택한 출력 사전 설정의 사용 옵션을 사용하여 &lt;output\> 생성에서 **DITA-OT**&#x200B;을(를) 선택합니다.

   ![](images/custom-meta-data-output-preset.png){width="800" align="left"}

1. 등록 정보 드롭다운에서 DITA-OT 게시에 전달할 메타데이터를 선택합니다.

   속성 드롭다운에는 사용자 지정 속성과 기본 속성이 모두 나열됩니다. 예를 들어 위의 스크린샷에서 작성자는 사용자 지정 속성이지만 `dc:description`, `dc:language`, `dc:title` 및 `docstate`은(는) 기본 속성입니다.

   >[!NOTE]
   >
   > 이 속성은 다음 위치에서 사용할 수 있는 metadataList 파일에서 선택됩니다.`/libs/fmdita/config/metadataList`. 기본적으로 이 파일에는 `dc:description`, `dc:language`, `dc:title` 및 `docstate`의 네 가지 속성이 있습니다.

   이 파일은 `/apps/fmdita/config/metadataList`에 오버레이할 수 있습니다.

   값을 이미 정의한 사용자 지정 속성을 전달하려면 [DITA-OT PDF 출력에서 AEM 메타데이터 사용](https://experienceleaguecommunities.adobe.com/t5/xml-documentation-discussions/use-aem-metadata-in-dita-ot-pdf-output/td-p/411880)을 참조하십시오.

1. **속성** 드롭다운에서 필요한 사용자 지정 및 기본 속성을 선택합니다. 예를 들어 `author`, `dc:title` 및 `dc:description`을(를) 선택합니다. 파일을 만들면 만들어지는 표준 `metadata/properties`입니다. 선택한 속성이 드롭박스 아래에 나열됩니다.

   ![](images/selected-metadata-properties.png){width="300" align="left"}

1. 왼쪽 상단의 **완료**&#x200B;를 클릭하여 변경 내용을 저장합니다.
1. 출력을 생성합니다.

선택한 메타데이터 속성이 DITA-OT를 사용하여 생성된 출력으로 전달됩니다.

**상위 항목:**[&#x200B;출력 생성](generate-output.md)
