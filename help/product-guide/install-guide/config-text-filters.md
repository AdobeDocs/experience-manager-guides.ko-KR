---
title: 텍스트 필터 구성
description: 텍스트 필터를 구성하는 방법 알아보기
exl-id: 180e4ab5-5259-4a00-ac3c-bb1d6814ce0d
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '367'
ht-degree: 0%

---

# 텍스트 필터 구성 {#id21BPD0FK0XA}

AEM Guides에서는 AEM 저장소의 선택한 경로에 있는 파일에서 텍스트를 검색하는 기능을 제공합니다. 필터 검색을 사용하여 저장소 패널에서 파일을 검색하거나 파일을 검색할 수 있습니다. 웹 편집기에서 작업하는 동안 파일 찾아보기 대화 상자를 사용하여 이미지, 참조 또는 키 참조와 같은 요소를 삽입해야 합니다.

기본적으로 일부 향상된 필터를 사용하여 AEM 저장소의 파일을 검색할 수 있습니다. 선택한 경로에 있는 모든 DITA 파일이나 비 DITA 파일을 필터링할 수 있습니다. DITA 요소의 속성에서 특정 값을 검색할 수도 있습니다. 지정된 사용자가 체크 아웃한 파일을 찾을 수도 있습니다.

>[!NOTE]
>
> 전역 프로필을 구성하고 검색할 필터를 더 추가할 수도 있습니다.

텍스트 필터를 구성하려면 다음 단계를 수행하십시오.

1. 관리자로 Adobe Experience Manager에 로그인합니다.
1. 을(를) 클릭합니다&#x200B;**Adobe Experience Manager** 맨 위에 연결한 다음 **도구**.
1. 선택 **안내서** 도구 목록에서 **폴더 프로필**.
1. 을(를) 클릭합니다 **전역 프로필** 타일.
1. 클릭 **XML 편집기 구성**.
1. 클릭 **편집** 맨 위에 있는 아이콘.
1. ui\_config.json 파일을 다운로드합니다.
1. 파일에서 필터를 구성합니다. 아래 예와 같이 사용자 정의 필터를 추가할 수도 있습니다.

   다음 코드 조각은 필터링 옵션 DITA 파일, 비 DITA, DITA 요소 및 파일로 체크 아웃을 추가하는 방법을 보여 줍니다. 사용자 지정 필터 -Tags도 포함되어 있습니다.

   ```json
   [
     {
       "title": "DITA files",
       "property": "jcr:content/metadata/dita_class",
       "operation": "like",
       "children": [
         {
           "title": "DITA Topics",
           "value": "- topic/topic",
           "checked": true
         },
         {
           "title": "DITA Maps",
           "value": "- map/map",
           "checked": true
         }
       ]
     },
     {
       "title": "DITA elements",
       "property": "jcr:content/ditameta",
       "widgetId": "dita_filter",
       "operation": "like"
     },
     {
       "title": "Checked out by",
       "property": "jcr:content/cq:drivelock",
       "operation": "like",
       "itemConfig": {
         "component": "textfield",
         "placeholder": "Checked out by"
       },
       "children": [
         {
           "title": "Check out"
         }
       ]
     },
     {
       "title": "Tags",
       "property": "jcr:content/metadata/cq:tags",
       "itemConfig": {
         "component": "textfield",
         "placeholder": "Enter Tag"
       },
       "children": [
         {
           "title": "Tags"
         }
       ]
     }
   ]
   ```

   위의 코드 스니펫에서 첫 번째 필터는 DITA 파일용입니다. 필터 정의는 다음 매개 변수를 사용합니다.

   - **제목:** 필터의 표시 이름입니다. 이 제목은 파일 찾아보기 대화 상자에 필터링 옵션으로 나타납니다.

   - **속성:** 파일 메타데이터에서 일치시킬 속성입니다. 예를 들어 속성에 dita\_class 메타데이터가 있는 파일만 허용하려면 속성 필터를 사용하여 &quot;jcr:content/metadata/dita\_class&quot;를 해당 값으로 사용합니다.

   - **작업** 속성 매개 변수에 지정된 값이 있는지 확인하려면 &quot;exists&quot;를 지정하십시오.

1. 추가된 필터가 포함된 업데이트된 ui\_config.json 파일을 업로드합니다.

구성된 필터는 필터 패널에서 사용할 수 있습니다.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
