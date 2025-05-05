---
title: DITA-OT를 사용하여 메타데이터를 출력에 전달
description: AEM Guides에서 DITA-OT 게시를 사용하여 메타데이터를 출력에 전달하는 방법을 알아봅니다.
exl-id: 70ca32dc-56c3-45ee-b6b9-0efb8cc79ea1
feature: Publishing, Metadata Management
role: User
source-git-commit: ac83f613d87547fc7f6a18070545e40ad4963616
workflow-type: tm+mt
source-wordcount: '571'
ht-degree: 0%

---

# DITA-OT를 사용하여 메타데이터를 출력에 전달 {#id21BJ00QD0XA}

메타데이터는 출력에 대한 추가 정보입니다. Adobe Experience Manager Guides에서 기존 메타데이터를 전달하거나 사용자 지정 메타데이터 태그를 만들 수 있습니다. DITA-OT 게시를 사용하여 AEM, PDF, HTML5, EPUB 및 사용자 지정 형식 출력에 메타데이터를 전달할 수 있습니다.

DITA-OT를 사용하여 메타데이터를 출력으로 전달하는 방법에는 두 가지가 있습니다.

- [맵 콘솔 사용](#using-map-console)
- [맵 대시보드 사용](#using-map-dashboard)

## 맵 콘솔 사용

DITA-OT 게시를 사용하여 메타데이터를 출력에 전달하려면 다음 단계를 수행합니다.

1. [맵 콘솔에서 DITA 맵 파일을 엽니다](./open-files-map-console.md) 메타데이터를 DITA-OT에 전달합니다.
1. 메타데이터 필드를 전달할 출력 사전 설정을 선택하여 엽니다. 예를 들어 PDF 출력 사전 설정을 선택합니다. **DITA-OT** 옵션을 사용하여 만들어졌는지 확인하십시오.
1. **파일 속성** 드롭다운에서 DITA-OT 게시로 전달할 메타데이터를 선택합니다.

   ![](images/custom-metadata-output-preset-new.png){align="left"}

   속성 드롭다운에는 사용자 지정 속성과 기본 속성이 모두 나열됩니다. 예를 들어 위의 스크린샷 `dc:description`에서 `dc:language`, `dc:title` 및 `docstate`이(가) 기본 속성입니다.

   >[!NOTE]
   >
   > 이 속성은 다음 위치에서 사용할 수 있는 metadataList 파일에서 선택됩니다.`/libs/fmdita/config/metadataList`. 기본적으로 이 파일에는 `dc:description`, `dc:language`, `dc:title` 및 `docstate`의 네 가지 속성이 있습니다.

   이 파일은 `/apps/fmdita/config/metadataList`에 오버레이할 수 있습니다.

   값을 이미 정의한 사용자 지정 속성을 전달하려면 [DITA-OT PDF 출력에서 AEM 메타데이터 사용](https://experienceleaguecommunities.adobe.com/t5/xml-documentation-discussions/use-aem-metadata-in-dita-ot-pdf-output/td-p/411880)을 확인하십시오.

1. 선택한 속성이 드롭다운 아래에 나열됩니다.

   ![](images/metadata-added-dropdown.png){width="300" align="left"}

1. 오른쪽 상단의 **저장**&#x200B;을 선택하여 변경 내용을 저장합니다.
1. **출력 생성**&#x200B;을 선택하십시오.

선택한 메타데이터 속성이 DITA-OT를 사용하여 생성된 출력으로 전달됩니다.

>[!NOTE]
>
> Experience Manager Guides 2502년 릴리스부터 DITA-OT 명령줄을 통해 루트 맵 메타데이터 인수를 전달하는 기능이 더 이상 사용되지 않습니다. 그러나 중단을 방지하기 위해 `Config.Manager`에 새 속성을 추가하여 기능을 활성화하거나 비활성화합니다.  자세한 내용은 [출력 생성 설정 구성](../cs-install-guide/conf-output-generation.md#configure-the-dita-ot-command-line-arguement-field-on-the-dita-map-dashboard)을 참조하세요.

## 맵 대시보드 사용

**Assets UI**&#x200B;에서 작업하는 경우 다음 단계를 수행하여 DITA-OT 게시를 사용하여 메타데이터를 출력에 전달합니다.

1. **Assets UI**&#x200B;에서 로 이동하여 DITA-OT에 메타데이터를 전달할 DITA 맵 파일을 선택합니다.
1. 메타데이터 필드를 전달할 출력 사전 설정을 선택하고 편집합니다. 예를 들어 PDF 출력 사전 설정을 선택합니다.
1. 선택한 출력 사전 설정에서 **DITA-OT** 옵션을 선택합니다.

   ![](images/custom-meta-data-output-preset.png){align="left"}

1. 등록 정보 드롭다운에서 DITA-OT 게시에 전달할 메타데이터를 선택합니다.

   속성 드롭다운에는 사용자 지정 속성과 기본 속성이 모두 나열됩니다. 예를 들어 위의 스크린샷에서 작성자는 사용자 지정 속성이지만 `dc:description`, `dc:language`, `dc:title` 및 `docstate`은(는) 기본 속성입니다.

   >[!NOTE]
   >
   > 이 속성은 다음 위치에서 사용할 수 있는 metadataList 파일에서 선택됩니다.`/libs/fmdita/config/metadataList`. 기본적으로 이 파일에는 `dc:description`, `dc:language`, `dc:title` 및 `docstate`의 네 가지 속성이 있습니다.

   이 파일은 `/apps/fmdita/config/metadataList`에 오버레이할 수 있습니다.

   값을 이미 정의한 사용자 지정 속성을 전달하려면 [DITA-OT PDF 출력에서 AEM 메타데이터 사용](https://experienceleaguecommunities.adobe.com/t5/xml-documentation-discussions/use-aem-metadata-in-dita-ot-pdf-output/td-p/411880)을 확인하십시오.

1. **속성** 드롭다운에서 필요한 사용자 지정 및 기본 속성을 선택합니다. 예를 들어 `author`, `dc:title` 및 `dc:description`을(를) 선택합니다. 파일을 만들면 만들어지는 표준 `metadata/properties`입니다. 선택한 속성이 드롭박스 아래에 나열됩니다.

   ![](images/selected-metadata-properties.png){width="300" align="left"}

1. 왼쪽 상단의 **완료**&#x200B;를 선택하여 변경 내용을 저장합니다.
1. 출력을 생성합니다.

선택한 메타데이터 속성이 DITA-OT를 사용하여 생성된 출력으로 전달됩니다.



**상위 항목:**&#x200B;[&#x200B;출력 생성](generate-output.md)
