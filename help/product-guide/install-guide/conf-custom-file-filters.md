---
title: 파일 찾아보기 대화 상자에 대한 필터 구성
description: 파일 찾아보기 대화 상자에 대한 필터를 구성하는 방법 알아보기
exl-id: 1ef09820-3b18-4762-b177-4d40926e21f0
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '325'
ht-degree: 0%

---

# 파일 찾아보기 대화 상자에 대한 필터 구성 {#id20CIL7009GN}

웹 편집기에서 작업하는 동안 파일 찾아보기 대화 상자를 사용하여 이미지, 참조 또는 키 참조와 같은 요소를 삽입해야 합니다. 기본 파일 찾아보기 대화 상자에는 파일 필터링 옵션이 없습니다. 필요한 파일에 쉽고 빠르게 액세스할 수 있는 필터를 직접 추가할 수 있습니다.

다음 단계를 수행하여 파일 찾아보기 대화 상자에 사용자 정의 파일 필터링 옵션을 추가합니다.

1. AEM에 로그인하고 CRXDE Lite 모드를 엽니다.

1. 다음 위치에서 사용할 수 있는 기본 구성 파일로 이동합니다.

   `/libs/fmdita/clientlibs/clientlibs/xmleditor/ui_config.json`

1. 다음 위치에 기본 구성 파일의 복사본을 만듭니다.

   `/apps/fmdita/xmleditor/ui_config.json`

1. 로 이동하여 `ui_config.json` 파일 위치: `apps` 편집할 노드입니다.

1. 다음에서 `ui_config.json` 파일을 추가하고, 추가할 필터의 정의를 추가합니다.

   다음 코드 조각은 DITA 파일과 이미지 파일, 이렇게 두 가지 필터링 옵션을 추가하는 방법을 보여 줍니다.

   ```json
   "browseFilters": [
       {
         "title": "DITA Files",
         "property": "jcr:content/metadata/dita_class",
         "operation": "exists"
       },
       {
         "title": "Image Files",
         "property": "jcr:content/metadata/dc:format",
         "value": [        
           "image/jpeg",
           "image/gif",
           "image/png"
         ]
       }
   ]
   ```

   위의 코드 스니펫에서 첫 번째 필터는 DITA 파일용입니다. 필터 정의는 다음 매개 변수를 사용합니다.

   - **제목:**   필터의 표시 이름입니다. 이 제목은 파일 찾아보기 대화 상자에 필터링 옵션으로 나타납니다.

   - **속성:**   파일 메타데이터에서 일치시킬 속성입니다. 예를 들어 `dita_class` 속성의 메타데이터, 속성 필터는 &quot;`jcr:content/metadata/dita_class`&quot; 을 해당 값으로 사용합니다.

   - **작업:**   지정 &quot;`exists`속성 매개 변수에 지정된 값의 존재 여부를 일치시킵니다.

   두 번째 필터는 이미지 파일에 대한 것입니다. 매개 변수는 다음 사항을 제외하고 첫 번째 필터와 유사합니다. `value` 매개 변수. 다음 `value` 매개 변수는 이미지 유형 배열을 해당 값으로 가져옵니다. 값 매개변수에 지정된 모든 파일 유형이 검색되어 파일 찾아보기 대화 상자에 표시되고 다른 모든 파일 유형은 무시됩니다.

1. 저장 *ui\_config.json* 파일을 만들고 웹 편집기를 다시 로드합니다.

   파일 찾아보기 대화 상자를 시작하면 ui\_config.json 파일에 구성된 필터 옵션이 표시됩니다.

   ![](assets/file-browse-custom-filters.png){width="300" align="left"}
