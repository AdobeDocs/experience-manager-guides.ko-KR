---
title: 앱 사용자 지정
description: 앱 사용자 지정
role: User, Admin
exl-id: 3e454c48-2168-41a5-bbab-05c8a5b5aeb1
source-git-commit: 3615928117ce1be527dc3c6d2ec8ddd115b78b0a
workflow-type: tm+mt
source-wordcount: '486'
ht-degree: 0%

---

# 앱 사용자 지정

## 확장 프레임워크에 노출된 기능

데이터 액세스, 구성 및 이벤트 트리거에 사용할 수 있는 `proxy` 아래에 함수 및 getter 집합이 노출되었습니다. 다음은 목록 및 액세스 방법입니다.

```typescript
interface EventData {
  key?: string,
  keys?: string[]
  view?: any,
  next?: any,
  error?: any,
  completed?: any,
  id?: any
}

* getValue(key)
* setValue(key, value)
* subject // getter
* subscribe(opts: EventData)
* subscribeAppEvent(opts: EventData)
* subscribeAppModel(key, next)
* subscribeParentEvent(opts: EventData)
* parentEventHandlerNext(eventName: string, opts: any)
* appModelNext(eventName:string, opts) 
* appEventHandlerNext(eventName:string, opts)
* next(eventName:string, opts, eventHandler?)
* viewConfig //getter
* args //getter
```

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
    init: function () {
      this.setValue("buttonLabel", "Submit")
    },

    switchButtonLabel(){
        const buttonLabel = this.getValue("buttonLabel") === "Submit"? "Cancel" : "Submit"
        this.setValue("buttonLabel", buttonLabel)
    }
  }
```

아래 GIF은 위의 코드를 작동 중인 상태로 보여 줍니다
![기본 사용자 지정](imgs/basic_customisation.gif "기본 사용자 지정 단추")


### 구성 예제 보기

이 경우 `viewConfig`을(를) 사용하여 검색 모드 이벤트에 액세스하고 이벤트를 트리거하여 업데이트합니다.

```typescript
  { 
    id: 'repository_panel', 
    controller: {
      init: function () {
        console.log('Logging view config ', this.viewConfig)
        this.next(this.viewConfig.items[1].searchModeChangedEvent, { searchMode: true })
      }
    }
  }
```

### 가입 예

이 경우 파일 이름 바꾸기 옵션을 클릭할 때 파일 이름 바꾸기에 대한 구독을 콘솔 로그에 추가합니다

```typescript
  { 
    id: 'repository_panel', 
    controller: {
      init: function () {
        this.subscribe({
          key: 'rename',
          next: () => { console.log('rename using extension') }
        })
      }
    }
  }
```

### 앱 이벤트 구독 예

이 경우 변경된 활성 문서에 대한 콘솔 로그온(편집기 UI에서 탭 변경)

```typescript
  { 
    id: 'repository_panel', 
    controller: {
      init: function () {
        this.subscribeAppEvent({
          key: 'app.active_document_changed',
          next: () => { console.log('Extension: active document changed') }
        })
      }
    }
  }
```

### 앱 모델 이벤트 구독 예

`app.mode`과(와) 같은 앱 모델 이벤트 구독 예

```typescript
  { 
    id: 'repository_panel', 
    controller: {
      init: function () {
        this.subscribeAppModel('app.mode',
          () => { console.log('app mode subs') }
        )
      }
    }
  }
```

### 상위 컨트롤러 이벤트 예

여기서는 `left_panel_container` 컨트롤러의 이벤트인 `tabChange` 이벤트에 구독을 추가합니다.
`repository_panel`의 상위 컨트롤러로

```typescript
  { 
    id: 'repository_panel', 
    controller: {
      init: function () {
        this.subscribeParentEvent({
          key: 'tabChange',
          next: () => { console.log('tab change subs') }
        })
        this.parentEventHandlerNext('tabChange', {
          data: 'map_panel'
        )
      }
    }
  }
```

### 다음 앱 모델 및 앱 컨트롤러

실행할 올바른 이벤트와 해당 데이터를 알고 있어 직접 트리거할 수 있습니다

```typescript
  { 
    id: 'file_options', 
    controller: {
      init: function () {
        this.appModelNext('app.mode', 'author')
        this.appEventHandlerNext('app.active_document_changed', 'active doc changed')   
      }
    }
  } 
```
