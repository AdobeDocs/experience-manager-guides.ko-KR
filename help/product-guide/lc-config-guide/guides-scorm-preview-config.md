---
title: SCORM 미리 보기를 위한 콘텐츠 보안 정책 구성
description: Cloud Manager에서 환경 변수를 사용하여 SCORM 미리 보기를 위한 컨텐츠 보안 정책을 구성하는 방법에 대해 알아봅니다
feature: Authoring
role: User
source-git-commit: 730fe6021aa20aa2b57801807da0f471f84a7718
workflow-type: tm+mt
source-wordcount: '538'
ht-degree: 3%

---


# SCORM 미리 보기를 위한 CSP(콘텐츠 보안 정책) 구성

Experience Manager Guides SCORM 미리 보기는 미리 보기 환경에 적용되는 CSP(콘텐츠 보안 정책)를 제어하는 전용 환경 변수를 통해 관리됩니다. 설정을 활성화한 후 관리자는 신뢰할 수 있는 소스를 추가하여 설정을 확장할 수 있습니다. 이러한 소스에는 스크립트, 스타일, 글꼴, 이미지, 미디어, 프레임 등이 포함될 수 있으며 SCORM 패키지가 Experience Manager Guides에서 미리 보기를 올바르게 로드하고 렌더링하는 데 더 필요합니다.

이 문서에서는 Cloud Manager에서 환경 변수를 추가하고 구성하는 방법을 설명하고 JSON 값의 각 필드가 수행하는 작업을 분류하고 요구 사항이 변경될 경우 나중에 값을 업데이트하는 방법을 보여 줍니다.

## 구성 필드

변수 `GUIDES_SCORM_PREVIEW_CONFIG`이(가) JSON 개체를 해당 값으로 허용합니다. 각 값은 SCORM 미리 보기 중에 적용되는 CSP의 특정 측면을 제어합니다.

| 필드 | 유형 | 설명 |
|---|---|---|
| `CSP_ENABLED` | 부울 | SCORM 미리 보기에 대해 CSP 적용을 설정(`true`)하거나 해제(`false`)합니다. |
| `ALLOW_UNSAFE_EVAL` | 부울 | `true`(으)로 설정할 때 `eval()` 및 이와 유사한 안전하지 않은 JavaScript 평가 메서드를 사용할 수 있도록 허용합니다. |
| `ADDITIONAL_SCRIPT_SRC` | 배열 | JavaScript 서비스를 제공할 수 있는 신뢰할 수 있는 추가 소스입니다. |
| `ADDITIONAL_STYLE_SRC` | 배열 | 스타일시트를 제공할 수 있는 신뢰할 수 있는 추가 소스입니다. |
| `ADDITIONAL_FONT_SRC` | 배열 | 글꼴을 제공할 수 있는 신뢰할 수 있는 추가 소스입니다. |
| `ADDITIONAL_FRAME_SRC` | 배열 | `<iframe>` 요소 내에서 신뢰할 수 있는 추가 원본을 로드할 수 있습니다. |
| `ADDITIONAL_IMG_SRC` | 배열 | 이미지를 제공할 수 있는 신뢰할 수 있는 추가 소스입니다. |
| `ADDITIONAL_MEDIA_SRC` | 배열 | 오디오/비디오 컨텐츠를 제공할 수 있는 신뢰할 수 있는 추가 소스입니다. |
| `ADDITIONAL_WORKER_SRC` | 배열 | 웹 작업자에게 제공할 수 있는 신뢰할 수 있는 추가 소스입니다. |
| `ADDITIONAL_CONNECT_SRC` | 배열 | 미리보기가 허용되는 신뢰할 수 있는 추가 소스(예: XHR/가져오기 호출). |
| `ADDITIONAL_MANIFEST_SRC` | 배열 | 웹 앱 매니페스트를 제공할 수 있는 신뢰할 수 있는 추가 원본이 허용되었습니다. |
| `ADDITIONAL_OBJECT_SRC` | 배열 | `<object>`, `<embed>` 또는 `<applet>`을(를) 통해 신뢰할 수 있는 추가 원본을 로드할 수 있습니다. |


## 구성 필드의 기본값

```json
{
  "CSP_ENABLED": true,
  "ALLOW_UNSAFE_EVAL": false,
  "ADDITIONAL_STYLE_SRC": ["https://fonts.googleapis.com"],
  "ADDITIONAL_FONT_SRC": ["https://fonts.gstatic.com"],
  "ADDITIONAL_FRAME_SRC": ["https://www.youtube-nocookie.com", "https://www.youtube.com"],
  "ADDITIONAL_SCRIPT_SRC": [],
  "ADDITIONAL_WORKER_SRC": [],
  "ADDITIONAL_IMG_SRC": [],
  "ADDITIONAL_MEDIA_SRC": [],
  "ADDITIONAL_CONNECT_SRC": [],
  "ADDITIONAL_MANIFEST_SRC": [],
  "ADDITIONAL_OBJECT_SRC": []
}
```

필요에 따라 모든 값을 채우지 않아도 됩니다. 추가 출처를 허용하지 않아도 되는 경우 소스 유형을 빈 배열로 남겨둡니다.

>[!NOTE]
>
> SCORM 미리 보기에 대한 CSP 적용을 비활성화하려면 JSON 값으로 `"CSP_ENABLED": false`을(를) 설정합니다.

## Cloud Manager에서 변수 추가

1. Cloud Manager에 로그인하고 구성을 적용할 환경을 선택합니다.
2. 환경의 **구성** 탭으로 이동합니다.
3. 환경 변수를 추가하려면 **추가/업데이트**&#x200B;를 선택하십시오.

   ![클라우드 관리자에 새 변수 추가 ](assets/add-new-variable.png){width="650"}

4. **이름** 필드에 변수 이름(`GUIDES_SCORM_PREVIEW_CONFIG`)을 입력하십시오.

   ![이름 필드에 변수 이름을 추가하는 중](assets/variable-name.png){width="650"}

5. 과정에 필요한 소스 허용 목록을 포함한 전체 JSON 구성을 **값** 필드에 입력합니다.
6. 변수를 **작성자**, **게시** 또는 둘 다에 적용할지 여부를 선택하려면 **적용된 서비스**&#x200B;를 선택하십시오. Experience Manager Guides 작성의 경우 **작성자**&#x200B;를 선택하십시오.
7. **Type** 필드에서 **변수**&#x200B;을(를) 선택합니다.
8. **추가**&#x200B;를 선택합니다.
9. **저장**&#x200B;을 선택합니다.

   ![환경에 적용할 변수를 저장하는 중](assets/save.png){width="650"}

저장하면 Cloud Manager이 선택한 환경에 구성을 적용합니다. 일반적으로 전파되는 데 10~12분이 소요되므로 업데이트를 완료하는 데 시간이 걸릴 수 있습니다. 완료되면 해당 환경에서 SCORM 미리 보기에 대해 새 구성이 활성화됩니다.

## 변수 값 업데이트

요구 사항이 변경되면 Cloud Manager의 동일한 구성 탭에서 언제든지 `GUIDES_SCORM_PREVIEW_CONFIG` 변수를 다시 방문할 수 있습니다. 기존 변수를 찾아 해당 **추가/업데이트** 옵션을 선택하여 편집할 수 있도록 연 다음 필요에 따라 값을 수정합니다.