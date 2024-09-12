---
title: 주제와 콘텐츠 조각 모델 간의 JSON 기반 매핑을 구성합니다.
description: 주제와 콘텐츠 조각 모델 간의 JSON 기반 매핑을 구성하는 방법에 대해 알아봅니다.
exl-id: 438e2964-b9c7-462a-a68c-8031bd97911c
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 97d7776c81e7776d0248d6711ae5d05c46c44239
workflow-type: tm+mt
source-wordcount: '271'
ht-degree: 0%

---

# 주제와 컨텐츠 조각 간의 매핑 만들기



Adobe Experience Manager Guides을 사용하면 주제와 콘텐츠 조각 모델 간에 JSON 기반 매핑을 만들 수 있습니다. JSON 기반 매핑을 사용하여 주제 내의 일부 또는 모든 요소에 있는 콘텐츠를 콘텐츠 조각에 게시할 수 있습니다.

>[!NOTE]
> 
> 4.6 이상 버전을 사용하는 경우 이 매핑을 만들 필요가 없습니다. 주제 요소를 콘텐츠 조각 모델에 있는 필드로 드래그할 수 있습니다.
> 콘텐츠 조각을 [게시](../user-guide/publish-content-fragment.md)하는 방법에 대해 자세히 알아보세요.


1. *contentFragmentMapping.json*&#x200B;을(를) 다운로드하려면 Adobe Experience Manager에 관리자로 로그인하십시오.
1. 맨 위에 있는 Adobe Experience Manager 링크를 선택하고 **도구**&#x200B;를 선택합니다.
1. 도구 목록에서 [안내]를 선택하고 **폴더 프로필**&#x200B;을(를) 선택합니다.
1. **전역 프로필** 타일을 선택하십시오.
1. **XML 편집기 구성** 탭을 선택하고 맨 위의 **편집** 아이콘을 선택합니다.
1. **다운로드** 아이콘을 선택하여 로컬 시스템에서 *contentFragmentMapping.json* 파일을 다운로드합니다. 그런 다음 파일을 변경한 다음 동일한 파일을 업로드할 수 있습니다.

1. 다음 유효성 검사를 따라야 합니다.

   1. JSON 파일이어야 합니다.
   2. 하나 이상의 개체가 포함된 배열이 포함되어야 하며 모든 개체에는 다음 항목이 포함되어야 합니다.


      `"name": string `

      `"mapping": array`

      매핑의 각 객체에는 다음 항목이 포함되어야 합니다.

      `"modelField": string`

      `"xpath": string`

      `"outputType": string`
1. 파일을 저장하고 업로드합니다.

샘플 파일:

```
[
  {
    "mapping": [
      {
        "modelField": "title",
        "xpath": "/topic[1]/title[1]",
        "outputType": "textContent"
      },
      {
        "modelField": "shortdesc",
        "xpath": "/topic[1]/shortdesc[1]",
        "outputType": "textContent"
      },
      {
        "modelField": "topicData",
        "xpath": "/topic[1]/body[1]",
        "outputType": "outerHTML"
      }
    ],
    "name": "Full Topic"
  },
  {
    "mapping": [
      {
        "modelField": "title",
        "xpath": "/topic[1]/title[1]",
        "outputType": "textContent"
      },
      {
        "modelField": "shortdesc",
        "xpath": "/topic[1]/shortdesc[1]",
        "outputType": "textContent"
      },
      {
        "modelField": "heroImage",
        "xpath": "/topic[1]/body[1]/p[1]/image[1]",
        "outputType": "outerHTML"
      },
      {
        "modelField": "dataTable",
        "xpath": "/topic[1]/body[1]/table[1]",
        "outputType": "outerHTML"
      }
    ],
    "name": "Sample Example with XPath"
  }
]
```

기본 매핑을 사용하여 전체 주제를 게시할 수 있습니다. 드롭다운 **콘텐츠 조각 생성** 대화 상자에서 `Full Topic` 매핑을 선택하고 콘텐츠 조각 모델에 &quot;topicData&quot; 필드를 포함하십시오.
