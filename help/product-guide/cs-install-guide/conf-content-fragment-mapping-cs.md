---
title: 주제와 콘텐츠 조각 모델 간의 JSON 기반 매핑을 구성합니다.
description: 주제와 콘텐츠 조각 모델 간의 JSON 기반 매핑을 구성하는 방법에 대해 알아봅니다.
exl-id: 438e2964-b9c7-462a-a68c-8031bd97911c
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: f8c71e18f5e2e5dbc5a2abdbb92c72fdad3bb233
workflow-type: tm+mt
source-wordcount: '233'
ht-degree: 0%

---

# 주제와 컨텐츠 조각 간의 매핑 만들기

AEM Guides에서는 주제와 콘텐츠 조각 모델 간에 JSON 기반 매핑을 만드는 기능을 제공합니다. 이 매핑을 사용하여 주제 내의 일부 또는 모든 요소에 있는 콘텐츠를 콘텐츠 조각에 게시할 수 있습니다.

1. 다운로드하려면 *contentFragmentMapping.json*: 관리자로 Adobe Experience Manager에 로그인합니다.
1. 맨 위에 있는 Adobe Experience Manager 링크를 선택하고 **도구**.
1. 도구 목록에서 안내선을 선택하고 **폴더 프로필**.
1. 다음 항목 선택 **전역 프로필** 타일.
1. 다음 항목 선택 **XML 편집기 구성** 탭을 클릭하고 다음을 선택합니다. **편집** 맨 위에 있는 아이콘.
1. 다음 항목 선택 **다운로드** 아이콘 을 클릭하여 *contentFragmentMapping.json*  파일을 로컬 시스템에 저장합니다. 그런 다음 파일을 변경한 다음 동일한 파일을 업로드할 수 있습니다.

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

기본 매핑을 사용하여 전체 주제를 게시할 수 있습니다. 다음 항목 선택 `Full Topic` 드롭다운에서 매핑 **컨텐츠 조각 생성** 대화 상자를 열고 콘텐츠 조각 모델에 &quot;topicData&quot; 필드를 추가합니다.
