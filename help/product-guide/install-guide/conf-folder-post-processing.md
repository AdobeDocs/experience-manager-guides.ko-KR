---
title: 파일 이름 구성
description: Adobe Experience Manager Assets에 업로드된 폴더에 대해 사후 처리를 비활성화하는 방법에 대해 알아보기
feature: Filename Configuration
role: Admin
level: Experienced
exl-id: ff6e1322-9655-42aa-b353-199c70c9de49
source-git-commit: d525775afeeb89754762ff514126b1c3a3307b3f
workflow-type: tm+mt
source-wordcount: '322'
ht-degree: 0%

---

# 폴더에 대한 사후 처리 비활성화

기본적으로 업로드된 모든 자산은 DAM 자산 업데이트 워크플로우를 사용하여 처리됩니다. Experience Manager Guides은 이 워크플로우의 일부로 후처리라는 추가 처리를 실행합니다. UUID를 생성하는 데도 도움이 됩니다

*Adobe Experience Manager Assets* 서버에 파일과 폴더를 업로드하는 동안 사후 처리 및 UUID 생성을 비활성화할 수도 있습니다.


지정된 경로에서 후처리를 비활성화하거나 폴더에 대한 후처리를 무시하려면 다음 단계를 수행하십시오.


1. Adobe Experience Manager 웹 콘솔 구성 페이지를 엽니다.

   구성 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/system/console/configMgr
   ```

1. **com.adobe.fmdita.config.ConfigManager** 번들을 검색하고 클릭합니다.

1. 사후 처리에 폴더를 무시하려면 **Post 처리에 대해 무시된 경로** 옵션을 선택하십시오.

   표준 NODE_PROPERTIES를 설정할 문자열 값(다중 값 OPTIONS, 끝에 `/`이(가) 없는 경로가 있는 문자열)

   **기본값**: `/content/dam/projects/translation_output`

   >[!NOTE]
   >
   > 이 속성은 기본적으로 비활성화되어 있으며 맵 대시보드에서 번역 탭을 사용할 수 있습니다.

1. **Post 처리에 대해 활성화된 경로** 옵션을 선택하여 사후 처리에 대한 경로를 활성화합니다.

   표준 NODE_PROPERTIES를 설정할 문자열 값(다중 값 OPTIONS, 끝에 `/`이(가) 없는 경로가 있는 문자열)

   **기본값**: `/content/dam/`

   >[!NOTE]
   >
   > 이 속성은 기본적으로 비활성화되어 있으며 맵 대시보드에서 번역 탭을 사용할 수 있습니다.


1. **저장**&#x200B;을 클릭합니다.



## 후처리를 활성화 또는 비활성화하는 규칙

기본적으로 후처리는 Experience Manager DAM 폴더 아래의 모든 폴더 경로에 대해 수행됩니다. 구성은 다음 규칙에 따라 모든 폴더에 적용됩니다.

* 사후 처리에 대해 상위가 무시되지만 하위 폴더가 활성화된 경우 하위 및 모든 후속 항목이 활성화된 것으로 간주됩니다.
* 상위 항목을 사후 처리에 사용할 수 있지만 하위 항목이 무시되면 하위 항목과 모든 후속 항목이 무시된 것으로 간주됩니다.
* 무시된.post.processing.paths 및 enabled.post.processing.paths 구성에 동일한 폴더 경로가 있으면 사후 처리에서 무시된 것으로 간주됩니다.
