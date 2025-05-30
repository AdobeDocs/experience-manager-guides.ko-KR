---
title: 허용되는 특수 문자 구성
description: 허용되는 특수 문자를 구성하는 방법에 대해 알아봅니다.
exl-id: 3dd7752e-0836-480a-b1e1-6fa2099d404f
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '209'
ht-degree: 0%

---

# 허용되는 특수 문자 구성 {#id20CIL600035}

웹 편집기를 사용하면 일부 특수 문자를 즉시 삽입할 수 있습니다. 그러나 작성자가 문서에 삽입할 수 있는 특수 문자 목록을 사용자 지정할 수 있습니다. 특수 문자 목록을 사용자 정의하는 경우 기본 특수 문자 집합을 덮어씁니다. 작성자는 구성에 추가하는 특수 문자만 사용할 수 있습니다.

특수 문자의 기본 목록을 덮어쓰려면 다음 단계를 수행하십시오.

1. AEM에 로그인하고 CRXDE Lite 모드를 엽니다.

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


**상위 항목:**&#x200B;[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
