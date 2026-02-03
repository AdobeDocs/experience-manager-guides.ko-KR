---
title: 문서 상태 필터 구성
description: 문서 상태 필터를 구성하는 방법 알아보기
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 4942b914ff278ebcf09d00da32d6f9c7cc4d7ff9
workflow-type: tm+mt
source-wordcount: '251'
ht-degree: 0%

---

# 문서 상태 필터 구성

Adobe Experience Manager Guides에서는 현재 문서 상태를 기반으로 파일을 검색하는 기능을 제공합니다. 필터 검색을 사용하여 저장소 인터페이스에서 파일을 검색하여 파일을 검색할 수 있습니다.

문서 상태 필터를 구성하려면 다음 단계를 수행하십시오.

1. Adobe Experience Manager에 관리자로 로그인합니다.
1. 맨 위에 있는 Adobe Experience Manager 링크를 선택하고 **도구**&#x200B;를 선택합니다.
1. 도구 목록에서 **안내서**&#x200B;를 선택한 다음 **폴더 프로필**&#x200B;을 선택합니다.
1. **전역 프로필** 타일을 엽니다. 이러한 변경 사항을 전역이 아닌 해당 폴더에만 적용하려면 특정 폴더 프로필 타일을 선택할 수도 있습니다.
1. **XML 편집기 구성**(으)로 이동합니다.
1. 맨 위에 있는 **편집** 아이콘을 선택합니다.
1. **다운로드** 아이콘을 선택하여 로컬 시스템에서 `ui\_config.json` 파일을 다운로드합니다.
다운로드한 `ui\_config.json` 파일에서 다음 섹션을 참조하십시오.

       &quot;
       &quot;repositoryFilters&quot;: [
       {
       &quot;title&quot;: &quot;문서 상태&quot;,
       &quot;property&quot;: &quot;jcr:content/metadata/doctstate&quot;,
       &quot;자식&quot;: [
       {
       &quot;title&quot;: &quot;초안&quot;,
       &quot;value&quot;: &quot;초안&quot;
       ,
       {
       &quot;title&quot;: &quot;편집&quot;,
       &quot;value&quot;: &quot;편집&quot;
       ,
       {
       &quot;title&quot;: &quot;In-Review&quot;,
       &quot;value&quot;: &quot;In-Review&quot;
       ,
       {
       &quot;title&quot;: &quot;승인됨&quot;,
       &quot;value&quot;: &quot;승인됨&quot;
       ,
       {
       &quot;title&quot;: &quot;검토됨&quot;,
       &quot;value&quot;: &quot;검토됨&quot;
       ,
       {
       &quot;title&quot;: &quot;완료&quot;,
       &quot;value&quot;: &quot;완료&quot;
       
       ]
       
       ]
       &quot;
   이 코드 조각은 Experience Manager Guides에서 사용할 수 있는 기본 문서 상태 필터를 나타냅니다.

1. 조직의 워크플로에 따라 필터 값을 사용자 지정할 수 있습니다. 예를 들어 사용자 지정 문서 상태 **보류 중**&#x200B;을(를) 추가하려면 `children` 아래에 다음 항목을 삽입합니다.

   ```
   {
       "title": "Pending",
       "value": "Pending"
   }
   ```

1. 업데이트되었으면 파일을 저장하고 업로드합니다.

구성된 필터는 홈 페이지의 저장소에 있는 **필터** 패널에 표시됩니다.

**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
