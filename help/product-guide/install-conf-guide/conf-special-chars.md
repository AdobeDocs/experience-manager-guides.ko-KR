---
title: 허용되는 특수 문자 구성
description: 허용되는 특수 문자를 구성하는 방법에 대해 알아봅니다.
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '338'
ht-degree: 0%

---

# 허용되는 특수 문자 구성 {#id20CIL600035}

웹 편집기를 사용하면 일부 특수 문자를 즉시 삽입할 수 있습니다. 그러나 작성자가 문서에 삽입할 수 있는 특수 문자 목록을 사용자 지정할 수 있습니다. 특수 문자 목록을 사용자 정의하는 경우 기본 특수 문자 집합을 덮어씁니다. 작성자는 구성에 추가하는 특수 문자만 사용할 수 있습니다.

Experience Manager Guides 설정을 기반으로 하는 특수 문자의 기본 목록을 덮어쓰는 지침은 Cloud Service 또는 온프레미스에서 제공됩니다.

>[!BEGINTABS]

>[!TAB Cloud Service]

1. Cloud Manager의 Git 저장소의 다음 위치에 `symbols.json` 파일을 만듭니다.

   ```
   /apps/fmdita/xmleditor/
   ```

1. `symbols.json` 파일에 다음과 같이 특수 문자 정의를 추가합니다.

   ```
   {"symbols": [{"label": "Arrows",
      "items": [
      {   "name": "←",   "title": "Left Arrow"   } 
      ,   
      {   "name": "↑",   "title": "Up Arrow"      } 
      ]   
      }   ]   }
   ```


`symbols.json` 파일의 구조는 아래에 설명되어 있습니다.

- `"label": "Arrows"`: 특수 문자의 범주를 지정합니다. 코드 조각에 이름이 `"Arrows"`인 범주가 정의되어 있습니다.
- `"items"`: 범주에 특수 문자의 컬렉션을 정의합니다.
- `"name": "←", "title": "Left Arrow"`: 특수 문자의 정의입니다. `"name"` 레이블로 시작하며, 변경해서는 안 됩니다. 이름 뒤에는 특수 문자가 옵니다. `"title"`은(는) 해당 특수 문자의 도구 설명으로 나타나는 특수 문자의 이름 또는 제목입니다.

  범주 내에서 특수 문자에 대한 여러 정의를 정의할 수 있습니다.

>[!TAB 온-프레미스]

1. AEM에 로그인한 다음 CRXDE Lite 모드를 엽니다.

1. 다음 위치에 `symbols.json` 파일 만들기:

   ```json
   /apps/fmdita/xmleditor/
   ```

1. `symbols.json` 파일에 다음과 같이 특수 문자 정의를 추가합니다.

   ```json
   {"symbols": [{"label": "Arrows",
      "items": [
      {   "name": "←",   "title": "Left Arrow"   } 
      ,   
      {   "name": "↑",   "title": "Up Arrow"      } 
      ]   
      }   ]   }
   ```


`symbols.json` 파일의 구조는 아래에 설명되어 있습니다.

- `"label": "Arrows"`: 특수 문자의 범주를 지정합니다. 코드 조각에 이름이 `"Arrows"`인 범주가 정의되어 있습니다.
- `"items"`: 범주에 특수 문자의 컬렉션을 정의합니다.
- `"name": "←", "title": "Left Arrow"`: 특수 문자의 정의입니다. `"name"` 레이블로 시작하며, 변경해서는 안 됩니다. 이름 뒤에는 특수 문자가 옵니다. `"title"`은(는) 해당 특수 문자의 도구 설명으로 나타나는 특수 문자의 이름 또는 제목입니다.

범주 내에서 특수 문자에 대한 여러 정의를 정의할 수 있습니다.

>[!ENDTABS]

**상위 항목:**&#x200B;[&#x200B;웹 편집기 사용자 지정](customize-overview.md)
