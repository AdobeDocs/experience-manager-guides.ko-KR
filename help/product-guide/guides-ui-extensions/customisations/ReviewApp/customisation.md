---
source-git-commit: 5962414dfc065543b946cac1468a5f62013073cf
workflow-type: tm+mt
source-wordcount: '397'
ht-degree: 0%

---
# 리뷰 앱 사용자 정의

리뷰 앱의 맞춤화를 간소화하기 위해 당사는 아래와 같은 몇 가지 후크를 제공했습니다.

## Review-Comment

- id: `review_comment`
- 후크: `this.updateExtraProps`:

논의된 대로 [여기](../../aem_guides_framework/basic_customisation.md), 사용자 지정 중에 추가된 모든 새 속성은 `this.model.extraProps`. 메서드 `updateExtraProps` 리뷰 주석에 속성을 추가하여 서버에서 추가된 속성의 업데이트 및 저장을 처리할 수 있습니다.

### 사용 예

예를 들어 필드를 추가하려는 경우 `commentRationale` 및 `severity` 귀하의 의견에 추가했습니다.
다음을 업데이트하겠습니다. `commentRationale` &quot;이것은 중요한 문장이다.&quot; 및 `severity` &quot;위험&quot;으로 변경되었습니다.
다음 구문을 사용하여 이 작업을 수행할 수 있습니다.

```typescript
 this.updateExtraProps(
        {'commentRationale': 'This is an important sentence.',
        'severity': 'CRITICAL'}
      )
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
후크 `onNewCommentEvent` 에서는 새 댓글 또는 회신 이벤트에 대해 이벤트를 throw하거나 메서드를 호출할 수 있습니다.
에서 수신한 인수 `onNewCommentEvent` 포함:
   - events: 발송된 댓글/회신 이벤트입니다.
   - newComment: 부울 발송된 이벤트가 새 댓글 이벤트인 경우, 즉, `highlight`, `insertion`, `deletion`, `sticky note comment`
   - newReply: 부울 발송된 이벤트가 새 회신 이벤트인 경우.

2. 후크: `sendExtraProps`

이 후크는 을(를) 확장하려는 경우 유용합니다. `event` 및 보내기 `extraProps` 인라인 검토 패널에서 가져옵니다. 우리는 아래의 두 갈래의 사용에 대해 설명할 것이다.

### 인라인 검토 패널 예제

ExtraProp을 보내려고 하는데 `userInfo`: 새 댓글 또는 회신이 발송될 때마다. 이제 인라인 검토 패널을 통해 수행되지만 새로 생성된 댓글의 commentId에 대한 참조가 없으므로 다음 코드를 작성할 수 있습니다.

```typescript
    onNewCommentEvent(args){
      const events = _.get(args, "events")
      const currTopicIndex = tcx.model.getValue(tcx.model.KEYS.REVIEW_CURR_TOPIC) || this.model.currTopicIndex || "0"
      const event = _.get(_.get(events, currTopicIndex), '0')
      const newComment = _.get(args, 'newComment')
      const newReply = _.get(args, 'newReply')
      if ((newComment || newReply) && event) {
        this.next('setUserInfo', event)
      }
    },
```

위의 코드 스니펫에서 발송된 이벤트가 새 댓글 또는 회신인지 확인하고 있습니다. 새로운 댓글이나 답변이 있는 경우 해당 메서드를 호출하고 있습니다 `setUserInfo`

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
        this.sendExtraProps(
          data
        )
      })
    },
```

위 방법에서는 이벤트를 확장하여 사용자의 이름, 이메일, 제목 등을 포함하는 extraProp을 보냅니다. 이러한 방식으로 이벤트를 확장하면 extraProp이 올바른 commentId와 함께 전송되고 올바른 주석에 첨부됩니다.

후크 `updateExtraProps` 본래부터 후크를 호출합니다 `sendExtraProps`, 그래서 언제 무엇을 사용합니까?

다음을 사용합니다. `updateExtraProps` 다음에서 `review_comment` 컨트롤러, 주석이 이미 있음 `id` 따라서 다음을 언급하면 됩니다. `extraProps.`

다음 `inline_review_panel` 그러나 은 댓글의 id에 액세스할 수 없으므로 인라인 검토 패널에서 이벤트를 발송해야 할 때마다 `sendExtraProps` 쓸모가 있을 거예요
