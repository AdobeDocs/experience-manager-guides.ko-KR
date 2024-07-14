---
title: 주제와 경험 조각 템플릿 간의 JSON 기반 매핑을 구성합니다.
description: 주제와 경험 조각 템플릿 간의 JSON 기반 매핑을 구성하는 방법에 대해 알아봅니다.
feature: Output Generation
role: Admin
level: Experienced
exl-id: 2b59db60-61b5-4a7e-bbf1-35cab8b89323
source-git-commit: d525775afeeb89754762ff514126b1c3a3307b3f
workflow-type: tm+mt
source-wordcount: '402'
ht-degree: 0%

---

# 주제와 경험 조각 간의 매핑 만들기

Adobe Experience Manager Guides은 주제와 경험 조각 템플릿 간에 JSON 기반 매핑을 만드는 기능을 제공합니다. 이 매핑을 사용하여 주제 내의 일부 또는 모든 요소에 있는 콘텐츠를 경험 조각에 게시할 수 있습니다.

1. *experienceFragmentMapping.json*&#x200B;을(를) 다운로드하려면 Adobe Experience Manager에 관리자로 로그인하십시오.
1. 맨 위에 있는 Adobe Experience Manager 링크를 선택하고 **도구**&#x200B;를 선택합니다.
1. 도구 목록에서 [안내]를 선택하고 **폴더 프로필**&#x200B;을(를) 선택합니다.
1. 구성할 프로필 타일을 선택합니다. 전역 또는 폴더 수준 프로필에 대한 매핑을 구성할 수 있습니다. 예를 들어 **전역 프로필** 타일을 선택합니다.
1. **XML 편집기 구성** 탭을 선택하고 맨 위의 **편집** 아이콘을 선택합니다.
1. **다운로드** 아이콘을 선택하여 로컬 시스템에서 *experienceFragmentMapping.json* 파일을 다운로드합니다. 그런 다음 파일을 변경한 다음 동일한 파일을 업로드할 수 있습니다.

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

Experience Manager Guides은 전체 주제를 HTML으로 전환한 다음 경험 조각에 사용되는 핵심 구성 요소에 매핑할 수 있습니다. 예를 들어 `<p>` 태그의 콘텐츠를 매핑하여 경험 조각의 텍스트 구성 요소를 만들 수 있습니다.
* `name`: HTML 요소를 지정합니다. 예: `<div>`, `<img>`
* `class`: HTML 요소에 해당하는 DITA 요소 태그를 지정합니다. 예: `<p>` `<image>`
* `resourceType`: 경험 조각에 사용된 구성 요소에 적용할 수 있는 리소스 유형을 지정하십시오. 예를 들어 `wcm/foundation/components/text`은(는) wcm `text` 구성 요소에 대한 resourceType입니다.
* `attributeMap`: 텍스트 구성 요소를 `RichText`(으)로 렌더링할지 또는 이미지 구성 요소의 `fileReference`을(를) 포함할지 여부와 같은 추가 정보를 구성 요소에 제공합니다.




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



웹 편집기에서 경험 조각을 게시하는 동안 **경험 조각 생성** 대화 상자의 드롭다운에서 `Template`을(를) 선택하여 **매핑** 필드에서 템플릿에 사용할 수 있는 매핑을 봅니다. 템플릿에 대한 사용자 지정 매핑이 없는 경우 기본 매핑이 나열됩니다. 기본 매핑을 사용하여 전체 주제를 경험 조각으로 게시할 수 있습니다.

자세한 내용은 [Publish 경험 조각](../user-guide/publish-experience-fragment.md)을 참조하세요.
