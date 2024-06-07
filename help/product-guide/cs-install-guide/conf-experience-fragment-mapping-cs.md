---
title: 주제와 경험 조각 템플릿 간의 JSON 기반 매핑을 구성합니다.
description: 주제와 경험 조각 템플릿 간의 JSON 기반 매핑을 구성하는 방법에 대해 알아봅니다.
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: f252537d15d7e8f8651dddb0ae635905705e4adf
workflow-type: tm+mt
source-wordcount: '402'
ht-degree: 0%

---

# 주제와 경험 조각 간의 매핑 만들기

Adobe Experience Manager Guides에서는 주제와 경험 조각 템플릿 간에 JSON 기반 매핑을 만드는 기능을 제공합니다. 이 매핑을 사용하여 주제 내의 일부 또는 모든 요소에 있는 콘텐츠를 경험 조각에 게시할 수 있습니다.

1. 다운로드하려면 *experienceFragmentMapping.json*: 관리자로 Adobe Experience Manager에 로그인합니다.
1. 맨 위에 있는 Adobe Experience Manager 링크를 선택하고 **도구**.
1. 도구 목록에서 안내선을 선택하고 **폴더 프로필**.
1. 구성할 프로필 타일을 선택합니다. 전역 또는 폴더 수준 프로필에 대한 매핑을 구성할 수 있습니다. 예를 들어 **전역 프로필** 타일.
1. 다음 항목 선택 **XML 편집기 구성** 탭을 클릭하고 다음을 선택합니다. **편집** 맨 위에 있는 아이콘.
1. 다음 항목 선택 **다운로드** 아이콘 을 클릭하여 *experienceFragmentMapping.json*  파일을 로컬 시스템에 저장합니다. 그런 다음 파일을 변경한 다음 동일한 파일을 업로드할 수 있습니다.

1. 다음 유효성 검사를 따라야 합니다.

   1. JSON 파일이어야 합니다.
   2. 하나 이상의 개체가 포함된 배열이 포함되어야 하며 모든 개체에는 다음 항목이 포함되어야 합니다.


      `"template": string `

      `"mapping": array`

      매핑의 각 객체에는 다음 항목이 포함되어야 합니다.

      `"name": string`

      `"class": string`

      `"resourceType": string`

      `"attributeMap": array`


1. 파일을 저장하고 업로드합니다.

Experience Manager 안내서는 전체 주제를 HTML으로 전환한 다음 경험 조각에 사용되는 핵심 구성 요소에 매핑할 수 있습니다. 예를 들어 의 콘텐츠는 `<p>` 태그를 매핑하여 경험 조각에 텍스트 구성 요소를 만들 수 있습니다.
* `name`: HTML 요소를 지정합니다. 예를 들어, `<div>`, `<img>`
* `class`: HTML 요소에 해당하는 DITA 요소 태그를 지정합니다. 예를 들어, `<p>` `<image>`
* `resourceType`: 경험 조각에 사용된 구성 요소에 적용할 수 있는 리소스 유형을 지정합니다. 예를 들어, `wcm/foundation/components/text` wcm에 대한 resourceType입니다. `text` 구성 요소.
* `attributeMap`: 텍스트 구성 요소를 렌더링해야 하는지 여부와 같은 추가 정보를 구성 요소에 제공합니다. `RichText` 또는 다음을 포함 `fileReference` 이미지 구성 요소




샘플 파일:

```
[
  {
    "template": "default",
    "mapping": [
      {
        "name": "#element",
        "resourceType": "wcm/foundation/components/text",
        "attributeMap": [
          {
            "from": "outerHTML",
            "to": "text"
          },
          {
            "value": true,
            "to": "textIsRich"
          }
        ]
      }
    ]
  },
  {
    "template": "/conf/we-retail/settings/wcm/templates/experience-fragment-web-variation",
    "mapping": [
      {
        "name": "div",
        "class": "title",
        "resourceType": "wcm/foundation/components/text",
        "attributeMap": [
          {
            "from": "outerHTML",
            "to": "text"
          },
          {
            "value": true,
            "to": "textIsRich"
          }
        ]
      },
      {
        "name": "h1, h2, h3, h4, h5, h6",
        "resourceType": "wcm/foundation/components/text",
        "attributeMap": [
          {
            "from": "outerHTML",
            "to": "text"
          },
          {
            "value": true,
            "to": "textIsRich"
          }
        ]
      },
      {
        "name": "div",
        "class": "p",
        "resourceType": "wcm/foundation/components/text",
        "attributeMap": [
          {
            "from": "outerHTML",
            "to": "text"
          },
          {
            "value": true,
            "to": "textIsRich"
          }
        ]
      },
      {
        "name": "img",
        "class": "image",
        "resourceType": "wcm/foundation/components/image",
        "attributeMap": [
          {
            "from": "outerHTML",
            "to": "fileReference"
          }
        ]
      },
      {
        "name": "#element",
        "resourceType": "wcm/foundation/components/text",
        "attributeMap": [
          {
            "from": "outerHTML",
            "to": "text"
          },
          {
            "value": true,
            "to": "textIsRich"
          }
        ]
      }
    ]
  }
]
```



웹 편집기에서 경험 조각을 게시하는 동안 `Template` 의 드롭다운에서 **경험 조각 생성** 대화 상자에서 템플릿에 사용할 수 있는 매핑을 볼 수 있습니다. **매핑** 필드. 템플릿에 대한 사용자 지정 매핑이 없는 경우 기본 매핑이 나열됩니다. 기본 매핑을 사용하여 전체 주제를 경험 조각으로 게시할 수 있습니다.

자세한 내용은 [경험 조각 게시](../user-guide/publish-experience-fragment.md).

