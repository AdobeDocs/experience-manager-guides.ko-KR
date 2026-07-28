---
title: 색인 지정을 수행하여 [주석] 패널에 모든 검토 작업을 포함합니다.
description: 기존 검토 작업을 색인화하여 [주석] 패널의 검토 작업 드롭다운에서 최신 검토 작업과 함께 표시되도록 하는 방법을 알아봅니다.
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 7d0c757b647a2e6c5e563f0ed7db6a7225769033
workflow-type: tm+mt
source-wordcount: '219'
ht-degree: 0%

---

# 색인화를 수행하여 [주석] 패널의 주제에 대한 모든 검토 작업을 포함합니다.

[주석] 패널에서 사용할 수 있는 [주제에 대한 모든 검토 작업 보기](../user-guide/review-address-review-comments.md#view-all-review-tasks-for-a-topic) 기능을 사용하면 작성자가 검토 프로젝트를 전환하지 않고 현재 열려 있는 주제와 연결된 모든 검토 작업(열려 있거나 닫혀 있음)을 선택할 수 있습니다. 활성화되면 편집기의 **설명** 패널에 주제가 포함된 모든 검토 작업과 각 작업의 상태 및 주제가 속한 프로젝트가 나열된 드롭다운이 포함됩니다.

기본적으로 이 기능이 인스턴스에서 활성화되면 검토 작업이 생성될 때 색인화되므로 이 드롭다운에서 자동으로 사용할 수 있습니다.

그러나 Experience Manager Guides이 인스턴스에 배포될 때 기능이 비활성화되어 있으면 비활성화된 상태로 생성된 검토 작업이 인덱싱되지 않습니다. 관리자는 이러한 검토 작업이 이미 존재하는 후에 해당 기능을 활성화하면 해당 작업이 색인화되기 전까지 드롭다운에 표시되지 않습니다. 사용 가능하도록 설정하려면 기존 검토 작업을 색인화하는 1회 스크립트를 실행해야 합니다.

다음 cURL 명령을 한 번 실행하여 기존 검토 작업을 색인화합니다.

```bash
curl --location 'http://<host>:<port>/bin/guides/script/start' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--header 'Authorization: Basic <base64-encoded-credentials>' \
--header 'Cookie: cq-authoring-mode=TOUCH' \
--data-urlencode 'jobType=review-topic-guids-migration'
```
