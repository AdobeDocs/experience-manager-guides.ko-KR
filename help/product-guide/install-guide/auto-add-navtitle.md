---
title: 기본적@navtitle 속성 포함
description: 기본적으로 @navtitle 속성을 포함하는 방법 알아보기
exl-id: 3def20dc-dd24-4526-ae36-45708249d34a
feature: Web Editor Configuration
role: Admin
level: Experienced
TQID: https://experienceleague.adobe.com/bwVOZrkVrn6QPq7BoUttFvnFAzdLIL6--JGCoHYkA0o
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2: id: b0521e56-a0b2-40b6-bf47-ebc98751f9baid: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
role_v2: id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 222
ht-degree: 1%

---

# 기본적@navtitle 속성 포함 {#id2115BC0J0XA}

주제, 참조, 작업, \(하위\) 맵 등과 같은 여러 유형의 참조 파일을 맵에 추가할 수 있습니다. 이러한 파일의 대부분은 `@navtitle` 특성을 지원합니다. 하지만 이를 일관되게 사용하는 저자는 많지 않다. 맵에서 참조된 모든 파일에서 `@navtitle` 특성을 사용하도록 강제하려면 간단한 구성을 통해 그렇게 할 수 있습니다.

사용하도록 설정하면 맵에 추가하는 모든 참조 파일이 속성에 추가된 `@navtitle` 특성을 자동으로 가져옵니다. `@navtitle`은(는) 참조된 콘텐츠의 `title` 요소 값도 가져옵니다.

참조 파일의 속성에 기본적으로 `@navtitle` 특성을 포함하려면 다음 단계를 수행하십시오.

1. ui\_config.json 파일을 다운로드합니다.

   글로벌 수준 또는 폴더 수준 프로필에서 이 변경 작업을 수행할 수 있습니다. 이를 변경할 위치에 따라 해당 ui\_config.json 파일을 다운로드해야 합니다. ui\_config.json 파일 다운로드에 대한 자세한 내용은 [XML Web Editor 구성 및 사용자 지정](conf-folder-level.md#id2065G300O5Z)을 참조하십시오.

1. `ditaAttributes` 정의를 검색합니다.

   `ditaAttributes`의 기본 정의는 다음과 같습니다.

   ```json
   "ditaAttributes": {
   "attributes": [],
   "constraint": false,
   "required": {}
   },
   ```

1. `required` 매개 변수를 다음과 같이 변경합니다.

   ```json
   "required": {"navtitle": true}
   ```

1. 파일을 저장합니다.

1. 해당 프로필 \(Global 또는 Folder\)에 있는 파일을 업로드합니다.


이 구성을 사용하면 맵에 추가하는 모든 참조 파일에 기본적으로 `@navtitle` 특성이 포함됩니다.
