---
title: 사용자 정의
description: 리뷰 앱 사용자 정의
role: User, Admin
exl-id: 9f6a4e9f-fc13-40b5-a30f-151c94faff81
source-git-commit: 4f00d6b7ad45636618bafe92e643b3e288ec2643
workflow-type: tm+mt
source-wordcount: '402'
ht-degree: 0%

---

# 리뷰 앱 사용자 정의

리뷰 앱의 맞춤화를 간소화하기 위해 당사는 아래와 같은 몇 가지 후크를 제공했습니다.

## Review-Comment

- id: `review_comment`
- 후크: `this.updateExtraProps`:

[여기](../../aem_guides_framework/basic-customisation.md)에서 설명한 대로 사용자 지정 중에 추가된 새 특성은 `this.model.extraProps`에 적용됩니다. `updateExtraProps` 메서드를 사용하면 리뷰 주석에 특성을 추가할 수 있으므로 추가된 특성의 업데이트와 서버에서의 저장도 처리할 수 있습니다.

### 사용 예

예를 들어 댓글에 `commentRationale` 및 `severity` 필드를 추가하려는 경우가 있을 수 있습니다.
`commentRationale`을(를) &quot;중요한 문장입니다.&quot;로 업데이트하겠습니다. 및 `severity`에서 &quot;위험&quot;으로 변경되었습니다.
다음 구문을 사용하여 이 작업을 수행할 수 있습니다.

```typescript
  this.next('updateExtraProps', {
    'commentRationale': 'This is an important sentence.',
    'severity': 'CRITICAL'
  })
```

위의 코드 조각은 값의 업데이트 및 저장을 처리합니다. 뷰를 정의하여 저장된 값을 UI에 렌더링할 수 있습니다.

```JSON
{
    "component" : "label",
    "label": "@extraProps.commentRationale"
}
```

## 인라인 검토 패널

- id: `inline_review_panel`

1. 후크: `onNewCommentEvent`
후크 `onNewCommentEvent`을(를) 사용하면 새 댓글 또는 회신 이벤트에 이벤트를 던지거나 메서드를 호출할 수 있습니다.
`onNewCommentEvent`에서 받은 인수는 다음과 같습니다.
   - events: 발송된 댓글/회신 이벤트입니다.
   - newComment: 부울
발송한 이벤트가 새 댓글 이벤트인 경우(예: `highlight`, `insertion`, `deletion`, `sticky note comment`)
   - newReply: 부울
발송한 이벤트가 새 회신 이벤트인 경우.

2. 후크: `sendExtraProps`

이 후크는 인라인 검토 패널에서 `event`을(를) 확장하고 `extraProps`을(를) 전송하려는 경우에 유용합니다. 우리는 아래의 두 갈래의 사용에 대해 설명할 것이다.

### 인라인 검토 패널 예제

새 댓글이나 회신을 보낼 때마다 extraProp `userInfo`을(를) 보내려고 합니다. 이제 인라인 검토 패널을 통해 수행되지만 새로 생성된 댓글의 commentId에 대한 참조가 없으므로 다음 코드를 작성할 수 있습니다.

```typescript
    onNewCommentEvent(args){
      const events = _.get(args, "events")
      const currTopicIndex = tcx.model.getValue(tcx.model.KEYS.REVIEW_CURR_TOPIC) || this.getValue('currTopicIndex') || "0"
      const event = _.get(_.get(events, currTopicIndex), '0')
      const newComment = _.get(args, 'newComment')
      const newReply = _.get(args, 'newReply')
      if ((newComment || newReply) && event) {
        this.next('setUserInfo', event)
      }
    },
```

위의 코드 스니펫에서 발송된 이벤트가 새 댓글 또는 회신인지 확인하고 있습니다. 새 댓글이나 회신이 있는 경우 `setUserInfo` 메서드를 호출합니다.

```typescript
    setUserInfo(event) {
      this.loader?.getUserInfo(event.user).subscribe(userData => {
        const extraProps = {
          "userFirstName": userData?.givenName || '',
          "userLastName": userData?.familyName || '',
          "userTitle": userData?.title || '',
          "userJobTitle": userData?.jobTitle || '',
          'userEmail': userData?.email || '',
        }
        const data = {... event, extraProps}
        this.next(
          'sendExtraProps',
          data
        )
      })
    },
```

위 방법에서는 이벤트를 확장하여 사용자의 이름, 이메일, 제목 등을 포함하는 extraProp을 보냅니다. 이러한 방식으로 이벤트를 확장하면 extraProp이 올바른 commentId와 함께 전송되고 올바른 주석에 첨부됩니다.

후크 `updateExtraProps`이(가) 기본적으로 후크 `sendExtraProps`을(를) 호출하므로 언제 사용해야 합니까?

`review_comment` 컨트롤러에서 `updateExtraProps`을(를) 사용합니다. 이 컨트롤러에는 이미 `id`의 댓글이 있으므로 `extraProps.`을(를) 언급하기만 하면 됩니다.

그러나 `inline_review_panel`은(는) 댓글의 ID에 액세스할 수 없으므로 인라인 검토 패널에서 이벤트를 발송해야 할 때마다 `sendExtraProps`이(가) 편리해집니다.
