---
title: 웹 편집기 도구 모음에서 추가 특수 문자 구성
description: AEM Guides의 웹 편집기에서 추가 특수 문자를 구성하는 방법에 대해 알아봅니다.
feature: Web Editor
role: User
exl-id: 0fbc05a5-a6b0-4f6b-bbc4-8fca03581d90
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '250'
ht-degree: 0%

---

# 웹 편집기 도구 모음에서 추가 특수 문자를 구성하는 방법

웹 편집기 도구 모음에는 작성자가 이미 특수 문자를 삽입할 수 있는 바로 가기 옵션이 있습니다.
아래 스크린샷에서도 동일한 내용을 볼 수 있습니다.

![특수 문자](assets/special-chars.png)


이러한 문자 목록은 여기에서 구성할 수 있습니다. 여기에 문자를 더 추가해야 하는 경우 아래 단계를 따르십시오.

+ AEM에 로그인하고 CRXDE Lite 모드를 엽니다.

+ &#39;/apps/fmdita/xmleditor/&#39; 위치에 symbols.json 파일을 만듭니다. (&#39;/libs/fmdita/clientlibs/clientlibs/xmleditor/symbols.json&#39; 위치에서 기본값을 복사할 수 있습니다.)

+ symbols.json 파일에 다음과 같이 특수 문자 정의를 추가합니다.

```
{
      "label": "Logical Symbols",
      "items": [
        {
          "name": "≥",
          "title": "Greater-Than or Equal To"
        },
        {
          "name": "≤",
          "title": "Smaller-Than or Equal To"
        }
      ]
}
```

symbols.json 파일의 구조는 아래에 설명되어 있습니다.

+ &quot;label&quot;: &quot;논리적 기호&quot;: 특수 문자의 범주를 지정합니다. 코드 조각에 &quot;논리 기호&quot;라는 이름의 범주가 정의되어 있습니다.

+ &quot;items&quot;: 카테고리에 있는 특수 문자의 컬렉션을 정의합니다.

+ &quot;name&quot;: &quot;≥&quot;, &quot;title&quot;: &quot;크거나 같음&quot;: 특수 문자의 정의입니다. 이름은 &quot;name&quot; 레이블로 시작하며, 이 레이블은 변경하면 안 됩니다. 이름 뒤에는 특수 문자가 옵니다. 제목은 해당 특수 문자의 도구 설명으로 나타나는 특수 문자의 이름 또는 제목입니다.

범주 내에서 특수 문자에 대한 여러 정의를 정의할 수 있습니다.

이렇게 하면 특수 문자 대화 상자에 다른 범주가 추가됩니다.

![특수 기호 범주](assets/special-char-category.png)

![특수 문자 삽입](assets/insert-special-char.png)

>[!MORELIKETHIS]
>
>+ [설치 및 구성 안내서](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/3-6/XML-Documentation-for-Adobe-Experience-Manager_Installation-Configuration-Guide_EN.pdf)
