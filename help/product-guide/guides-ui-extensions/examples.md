---
title: 예
description: 사용자 지정 예 목록
exl-id: 40cdc703-7a78-4979-a7b5-1158558d4868
source-git-commit: 924c34a2ec6249b81cbdddf72392dac600e22e9f
workflow-type: tm+mt
source-wordcount: '461'
ht-degree: 0%

---

# 예

이 패키지에서는 몇 가지 사용자 지정 예제도 제공했습니다(`guides_extension/src`에서 사용 가능). 다음은 각 요소에 대한 간략한 설명입니다.

1. [상황에 맞는 메뉴](./examples/file_options.ts)
이 예제에서는 `file_options` 컨텍스트 메뉴를 사용자 지정하여 `Delete` 및 `Edit` 옵션을 제거하고 `Duplicate` 옵션을 `Download` 옵션으로 바꾸었습니다.

2. [왼쪽 패널](./examples/left_panel_container.ts)
이 예제에서는 &quot;TEST EXTENSION&quot;이라는 다른 `left tab panel` 및 레이블이 있는 해당 `tab`을(를) 포함하도록 `tab panel`을(를) 사용자 지정했습니다. `Test Tab Panel`

3. [오른쪽 패널](./examples/right_panel_container.ts)
이 예제에서는 &quot;TEST EXTENSION&quot;이라는 다른 `right tab panel` 및 레이블이 있는 해당 `tab`을(를) 갖도록 `tab panel`을(를) 사용자 지정했습니다. `New Tab Panel`

4. [저장소 패널](./examples/repository_panel.ts)

5. [도구 모음](./examples/toolbar.ts)
이 예제에서는 `Insert Element`, `Insert Paragraph`, `Insert Numbered List`, `Insert Bulleted List` 단추를 모두 포함하는 하나의 `More Insert Options` 단추로 대체했습니다.

6. [메타데이터 패널의 관리 단추](./examples/metadata_report_manage_button.ts)
이 예제에서는 선택한 파일이 읽기 전용 모드에 있을 때 비활성화되도록 **관리** 단추(보고서 페이지의 메타데이터 패널에 있음)를 사용자 지정했습니다. 이렇게 하면 편집용이 아닌 파일에서 실수로 메타데이터를 편집하는 것을 방지할 수 있습니다.

[앱 예제 검토]

1. [주석 도구 상자](./examples/review_app_examples/annotation_extension.ts)
이 예제에서는 AEM의 현재 검토 주제를 여는 다른 단추를 주석 도구 상자에 추가했습니다.

2. [댓글 검토](./examples/review_app_examples/review_comment.ts)
이 예제에서는 사용자 이름을 사용자 정보로 대체하고(주석자의 전체 이름 및 제목 고려), 고유한 주석 ID, mailTo 아이콘을 추가하고, 주석 심각도 및 근거를 언급하기 위한 입력 필드를 추가했습니다.
대화 상자를 여는 XMLEditor 측의 댓글에 `accept with modification` 단추도 추가했습니다.

3. [댓글 회신](./examples/review_app_examples/comment_reply.ts)
이 예제에서는 사용자 이름을 사용자 정보로 대체하고(전체 이름 및 댓글 제목 고려) 댓글 헤더에 mailTo 아이콘을 추가했습니다.

4. [인라인 검토 패널](./examples/review_app_examples/inline_review_panel.ts)
이 파일에서 `Review Comment` 및 `Comment Reply` 예제에 언급된 고유한 주석 ID를 계산하고 할당합니다.
   - `setCommentId` 메서드는 댓글 수에 따라 고유한 댓글 ID를 각 댓글로 설정합니다.

   - `setUserInfo`은(는) 각 댓글에 전체 이름과 제목을 사용하여 userInfo 값을 설정합니다.

   - `onNewCommentEvent`은(는) 각 새 댓글 또는 회신에 대해 `setUserInfo` 메서드가 호출되도록 합니다.

   - `updatedProcessComments` 함수는 각 새 댓글 이벤트에 대해 실행되며 새 댓글 이벤트가 발생하면 `setCommentId`이(가) 호출되도록 합니다.

5. [주제 검토 패널](./examples/review_app_examples/topic_reviews.ts): 이 파일은 [인라인 검토 패널](./examples/review_app_examples/inline_review_panel.ts)을 확장하므로 추가된 사용자 지정이 검토 앱 측에서도 작동합니다.

6. [수정 대화 상자로 수락](./examples/review_app_examples/accept_with_modification_dialog.ts)
앱에 새 위젯을 추가하는 예제입니다. 여기에 두 개의 입력 텍스트 필드가 있는 새 대화 상자가 만들어졌습니다. `Revised Text` 및 `Adjudicator Comment Rationale`

7. [개정 저장](./examples/save_revision.ts)
이는 기존 대화 상자를 업데이트하는 방법의 예입니다. 여기에 게시 버튼을 추가합니다. 대화 상자의 내용을 수정할 수 있습니다. 여기에 있는 JSON을 참조하세요. [`save_revision`](./jsons/dialogs/save_revision.json)

![수정 대화 상자 포함](./imgs/accept_with_modification_dialogue.png)

다음은 맞춤화 전후의 검토 패널입니다.

![검토 패널;](./imgs/review_panel.png)
![수정 대화 상자와 함께 수락](./imgs/customised_review_panel.png)
