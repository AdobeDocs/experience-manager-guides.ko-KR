---
title: 앱 사용자 지정
description: 앱 사용자 지정
role: User, Admin
exl-id: 3e454c48-2168-41a5-bbab-05c8a5b5aeb1
source-git-commit: 4f00d6b7ad45636618bafe92e643b3e288ec2643
workflow-type: tm+mt
source-wordcount: '336'
ht-degree: 0%

---

# 앱 사용자 지정

앱은 MVC(모델, 뷰, 컨트롤러) 구조를 따릅니다.

## 모델

이 모델은 다양한 속성을 정의하고 해당 값을 저장합니다. 모델에 저장된 다양한 속성들의 값들은 구문을 사용하여 제어기로부터 액세스될 수 있다

```typescript
this.getValue('attributeName')
```

앱의 사용자 지정을 위해 새로 만든 모든 속성이 모델의 맵 아래에 추가됩니다.
모델에서 새 속성을 설정하려면 컨트롤러에서 다음 구문을 사용합니다.

```typescript
// If a key is not already in model then it will be added to extraProps
this.setValue('key', value)
```

모델에 추가된 속성에 액세스하려면 다음 구문을 사용합니다.

```typescript
const value = this.getValue("key")
```

## 보기

보기는 앱의 UI를 정의합니다. JSON 파일을 사용하여 파일 보기를 정의합니다. 여기에서는 구성 요소 및 css(구성 요소 추출에 제공된 대로)를 정의하고 모델에 저장된 값을 렌더링합니다.
앱에서 각 보기는 JSON을 사용하여 정의됩니다. JSON은 `id`이라는 고유 ID를 사용하여 참조됩니다.

## 컨트롤러

컨트롤러는 이벤트를 처리하고 데이터를 처리하는 데 사용됩니다. 컨트롤러는 서버에서 데이터를 가져오고 전송하는 데 사용되며 UI에 표시되고 백엔드에 저장되는 항목 간의 인터페이스입니다.

- 초기화 시 값을 설정하려면 `init` 함수를 사용합니다.
- 컨트롤러에 방법을 추가하려면 다음 구문을 사용합니다.

```typescript
methodName: function(args){
    // functionality
}
```

여기서 `methodName`은(는) JSON(보기) 또는 다른 함수에서 메서드를 참조하는 `key` 역할을 합니다.

- 제어기에서 메서드를 호출하려면 구문을 사용합니다

```typescript
this.next('methodName', args)
```

## 예

이제 간단한 예제를 사용하여 이 3가지 구성 요소가 서로 상호 작용하는 방법을 보여 드리겠습니다.
클릭할 때 레이블 값을 전환하는 버튼을 추가하겠습니다

### 보기 예

아래에서는 변수 이름 `buttonLabel` 아래에 모델에 저장된 동적 텍스트를 표시하는 단추에 대한 JSON을 정의합니다.
이 예에서 버튼을 클릭하면 레이블이 변경됩니다.

```JSON
{
    "component": "button",
    "label": "@extraProps.buttonLabel",
    "variant": "cta",
    "on-click": "switchButtonLabel",
}
```

### 모델 예

이 경우 `extraProps.buttonLabel`은(는) 단추의 레이블을 보유합니다.

### 컨트롤러 예

```typescript
  controller: {
    init: function (context) {
      context.setValue("buttonLabel", "Submit")
    },

    switchButtonLabel(){
        const buttonLabel = this.getValue("buttonLabel") === "Submit"? "Cancel" : "Submit"
        this.setValue("buttonLabel", buttonLabel)
    }
  }
```

아래 GIF은 위의 코드를 작동 중인 상태로 보여 줍니다
![기본 사용자 지정](imgs/basic_customisation.gif "기본 사용자 지정 단추")
