---
title: 허용되는 특수 문자 구성
description: 허용되는 특수 문자를 구성하는 방법에 대해 알아봅니다.
exl-id: 7ff4305f-71bb-4155-b8e5-911cea6f0ad9
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '206'
ht-degree: 0%

---

# 허용되는 특수 문자 구성 {#id20CIL600035}

웹 편집기를 사용하면 일부 특수 문자를 즉시 삽입할 수 있습니다. 그러나 작성자가 문서에 삽입할 수 있는 특수 문자 목록을 사용자 지정할 수 있습니다. 특수 문자 목록을 사용자 정의하는 경우 기본 특수 문자 집합을 덮어씁니다. 작성자는 구성에 추가하는 특수 문자만 사용할 수 있습니다.

특수 문자의 기본 목록을 덮어쓰려면 다음 단계를 수행하십시오.

1. 만들기 `symbols.json` Cloud Manager의 Git 저장소에 있는 다음 위치에 있는 파일입니다.

   ```
   /apps/fmdita/xmleditor/
   ```

1. 에 특수 문자 정의 추가 `symbols.json` 파일 형식:

   ```
   {"symbols": [{"label": "Arrows",
      "items": [
      {   "name": "←",   "title": "Left Arrow"   } 
      ,   
      {   "name": "↑",   "title": "Up Arrow"      } 
      ]   
      }   ]   }
   ```


의 구조 `symbols.json` 파일은 아래에 설명되어 있습니다.

- `"label": "Arrows"`: 특수 문자의 범주를 지정합니다. 코드 조각에 이름이 인 범주가 있습니다. `"Arrows"` 이(가) 정의되었습니다.
- `"items"`: 카테고리에 있는 특수 문자의 컬렉션을 정의합니다.
- `"name": "←", "title": "Left Arrow"`: 특수 문자의 정의입니다. 다음으로 시작: `"name"` 레이블. 변경하지 마십시오. 이름 뒤에는 특수 문자가 옵니다. 다음 `"title"` 는 해당 특수 문자의 도구 설명으로 나타나는 특수 문자의 이름 또는 제목입니다.

  범주 내에서 특수 문자에 대한 여러 정의를 정의할 수 있습니다.


**상위 항목:**[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
