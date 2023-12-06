---
sidebar_position: 8
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '372'
ht-degree: 0%

---


# 예

이 패키지에서는 몇 가지 사용자 정의 예제도 제공했습니다(다음에서 사용 가능). `guides_extension/src`). 다음은 각 요소에 대한 간략한 설명입니다.

1. [상황에 맞는 메뉴](./../../src/file_options.ts)
이 예제에서는 을(를) 사용자 지정했습니다. `file_options` 컨텍스트 메뉴, 제거 `Delete` 및 `Edit` 옵션 및 바꾸기 `Duplicate` 옵션이 있는 옵션 `Download` 옵션을 선택합니다.

2. [왼쪽 패널](../../src/left_panel_container.ts)
이 예제에서는 을(를) 사용자 지정했습니다. `left tab panel` 다른 것을 가지다`tab` 제목 &quot;TEST EXTENSION&quot; 및 해당 `tab panel` 레이블이 있는 항목: `Test Tab Panel`

3. [오른쪽 패널](../../src/right_panel_container.ts)
이 예제에서는 을(를) 사용자 지정했습니다. `right tab panel` 다른 것을 가지다 `tab` 제목 &quot;TEST EXTENSION&quot; 및 해당 `tab panel` 레이블이 있는 항목: `New Tab Panel`

4. [저장소 패널](../../src/repository_panel.ts)

5. [도구 모음](../../src/toolbar.ts)
이 예제에서는 를 교체했습니다 `Insert Element`, `Insert Paragraph`, `Insert Numbered List`, `Insert Bulleted List` 1개가 있는 단추 `More Insert Options` 이러한 모든 항목이 포함된 단추입니다.

[앱 예 검토]

1. [주석 도구 상자](../../src/review_app_examples/annotation_extension.ts)
이 예제에서는 AEM의 현재 검토 주제를 여는 다른 단추를 주석 도구 상자에 추가했습니다.

2. [리뷰 댓글](../../src/review_app_examples/review_comment.ts)
이 예제에서는 사용자 이름을 사용자 정보로 대체하고(주석자의 전체 이름 및 제목 고려), 고유한 주석 ID, mailTo 아이콘을 추가하고, 주석 심각도 및 근거를 언급하기 위한 입력 필드를 추가했습니다.
또한 이(가) 추가되었습니다 `accept with modification` 대화 상자를 여는 XMLEditor 측의 주석에 대한 단추입니다.

3. [댓글 회신](../../src/review_app_examples/comment_reply.ts)
이 예제에서는 사용자 이름을 사용자 정보로 대체하고(전체 이름 및 댓글 제목 고려) 댓글 헤더에 mailTo 아이콘을 추가했습니다.

4. [인라인 검토 패널](../../src/review_app_examples/inline_review_panel.ts)
이 파일에서는 다음에 언급된 고유한 댓글 ID를 계산하고 할당합니다. `Review Comment` 및 `Comment Reply` 예.
   - 다음 `setCommentId` 메서드는 댓글 수에 따라 고유한 댓글 ID를 각 댓글로 설정합니다.

   - 다음 `setUserInfo` 각 주석의 전체 이름과 제목을 사용하여 userInfo 값을 설정합니다.

   - 다음 `onNewCommentEvent` 다음을 확인합니다. `setUserInfo` 메서드는 각 새 댓글 또는 회신에 대해 호출됩니다.

   - 다음 `updatedProcessComments` 함수는 각 새 주석 이벤트에 대해 실행되고 `setCommentId` 새 댓글 이벤트가 발생하면 이 호출됩니다.

5. [주제 검토 패널](../../src/review_app_examples/topic_reviews.ts): 이 파일은 [인라인 검토 패널](../../src/review_app_examples/inline_review_panel.ts) 따라서 추가된 맞춤화는 검토 앱 측면에서도 작동합니다.

6. [수정 포함 수락 대화 상자](../../src/review_app_examples/accept_with_modification_dialog.ts)
다음은 앱에 새 위젯을 추가하는 예제입니다. 여기에서는 두 개의 입력 텍스트 필드가 있는 새 대화 상자를 만들었습니다. `Revised Text` 및 `Adjudicator Comment Rationale`

![수정 포함 수락 대화 상자](./imgs/accept_with_modification_dialogue.png)

다음은 맞춤화 전후의 검토 패널입니다.

![검토 패널;](./imgs/review_panel.png)
![수정 포함 수락 대화 상자](./imgs/customised_review_panel.png)
