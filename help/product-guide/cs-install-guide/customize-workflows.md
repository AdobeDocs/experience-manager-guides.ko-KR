---
title: 워크플로우 구성 및 사용자 정의
description: 워크플로우 구성 및 사용자 지정 방법 알아보기
exl-id: a5742082-cc0b-49d9-9921-d0da1b272ea5
feature: Workflow Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '1362'
ht-degree: 1%

---

# 워크플로우 구성 및 사용자 정의 {#id181AI0OJ0RO}

워크플로우를 통해 Adobe Experience Manager \(AEM\) 활동을 자동화할 수 있습니다. 워크플로우는 특정 순서로 실행되는 일련의 단계로 구성됩니다. 각 단계에서 실행할 개별 활동을 정의할 수 있습니다. 예를 들어 주제 검토를 만들 때 그룹의 모든 검토자에게 이메일 알림을 보낼 수 있습니다. 또는 출력 생성 작업이 완료되면 게시자에게 알림을 보냅니다.

AEM의 워크플로우에 대한 자세한 내용은 다음을 참조하십시오.

- [워크플로 인스턴스 관리](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/workflows-administering.html)

- 워크플로 적용 및 참여: [프로젝트 워크플로를 사용하여 작업](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/authoring/projects/workflows.html).


이 항목의 섹션은 AEM Guides에 제공되는 기본 워크플로우에서 수행할 수 있는 다양한 사용자 지정을 안내합니다.

## 리뷰 워크플로 사용자 지정 {#id176NE0C00HS}

모든 조직의 콘텐츠 작성 팀은 비즈니스 요구 사항을 충족하기 위해 특정 방식으로 작업합니다. 일부 조직에서는 전용 편집기가 있는 반면, 다른 조직에서는 편집 검토 시스템을 자동화할 수 있습니다. 예를 들어 조직에서 일반적인 작성 및 게시 작업 과정에는 작성자가 컨텐츠 작성을 완료할 때마다 검토자에게 자동으로 전달되고 검토가 완료되면 최종 출력을 생성하기 위해 게시자에게 전달되는 등의 작업이 포함될 수 있습니다. AEM에서 컨텐츠 및 에셋에서 수행하는 활동은 프로세스 형태로 결합되어 AEM 워크플로우에 매핑될 수 있습니다. AEM의 워크플로에 대한 자세한 내용은 AEM 설명서에서 [워크플로 관리](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/workflows-administering.html)를 참조하십시오.

AEM Guides을 사용하면 기본 검토 워크플로를 사용자 지정할 수 있습니다. 다른 작성 또는 게시 작업 과정에서 다음 네 가지 사용자 정의 검토 관련 프로세스를 사용할 수 있습니다.

- **검토 만들기**: 이 프로세스는 검토 작업을 만드는 데 필요한 메타데이터를 준비합니다. 예를 들어 검토자에게 검토 권한을 할당하고, 주제 상태를 검토 중으로 설정하며, 검토 타임라인을 설정하는 등의 작업을 수행합니다. 이 네 가지 프로세스 중 사용자 정의 워크플로우에 포함되어야 하는 유일한 필수 프로세스입니다. 워크플로우에서 다른 세 가지 프로세스를 포함하거나 제외하도록 선택할 수 있습니다.

- **검토 작업 할당**: 이 프로세스는 검토 작업을 만들고 개시자 및 검토자에게 작업 알림을 보냅니다.

- **검토 전자 메일 보내기**: 이 프로세스는 검토 전자 메일을 시작자 및 검토자에게 보냅니다.

- **검토를 종료하도록 작업 예약**: 이 프로세스에서는 기한 도달 시 검토 프로세스가 완료되도록 합니다.


사용자 정의 검토 워크플로우를 만들 때 첫 번째 작업은 검토 만들기 프로세스에 필요한 필수 메타데이터를 설정하는 것입니다. 이를 위해 ECMA 스크립트를 만들 수 있습니다. 메타데이터를 할당하는 ECMA 스크립트의 샘플은 아래에 나와 있습니다.

```javascript
var workflowdata=workItem.getWorkflowData();
workflowdata.getMetaDataMap().put("initiator","admin");
workflowdata.getMetaDataMap().put("operation","AEM_REVIEW");
workflowdata.getMetaDataMap().put("orgTopics","/content/dam/xml-solution/review.xml");
workflowdata.getMetaDataMap().put("payloadJson","{\"base\":\"/content/dam/xml-solution\",\"asset\":[\"/content/dam/xml-solution/review.xml\"],\"referrer\":\""}");
workflowdata.getMetaDataMap().put("deadline","2017-06-27T13:19:00.000+05:30");
workflowdata.getMetaDataMap().put("title","Review through custom workflow");
workflowdata.getMetaDataMap().put("description","Initiate this review process using the AEM workflow");
workflowdata.getMetaDataMap().put("assignee","user-one", "user-two");
workflowdata.getMetaDataMap().put("status","1");
workflowdata.getMetaDataMap().put("projectPath","/content/projects/review");
workflowdata.getMetaDataMap().put("startTime", System.currentTimeMillis());
```

`/etc/workflows/scripts` 노드에서 이 스크립트를 만들 수 있습니다. 다음 표에서는 이 ECMA 스크립트에 의해 지정되는 속성에 대해 설명합니다.

| 속성 | 유형 | 설명 |
|--------|----|-----------|
| `initiator` | 문자열 | 검토 작업을 시작하는 사용자의 사용자 ID입니다. |
| `operation` | 문자열 | 정적 값이 `AEM_REVIEW`(으)로 설정되었습니다. |
| `orgTopics` | 문자열 | 검토를 위해 공유 중인 주제 경로. 쉼표로 구분된 여러 주제를 지정합니다. |
| `payloadJson` | JSON 개체 | 다음 값을 지정하십시오. -   `base`: 검토를 위해 보낸 주제가 포함된 상위 폴더의 경로입니다. <br> -   `asset`: 검토를 위해 보낸 주제의 경로. <br> -   `referrer`: 비워 둡니다. |
| `deadline` | 문자열 | 시간을 `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` 형식으로 지정하십시오. |
| `title` | 문자열 | 리뷰 작업의 제목을 입력합니다. |
| `description` | 문자열 | 검토 작업에 대한 설명을 입력합니다. |
| `assignee` | 문자열 | 검토를 위해 주제를 보낼 사용자의 사용자 ID입니다. |
| `status` | 정수 | 정적 값을 1로 설정합니다. |
| `startTime` | Long | `System.currentTimeMillis()` 함수를 사용하여 현재 시스템 시간을 가져옵니다. |

스크립트를 만들었으면 워크플로우에서 검토 만들기 프로세스를 호출하기 전에 스크립트를 호출합니다. 그런 다음 요구 사항에 따라 다른 검토 워크플로우 프로세스를 호출할 수 있습니다.

### 제거 구성에서 검토 워크플로우 제거

워크플로우 엔진 성능을 향상시키기 위해 완료된 워크플로우 인스턴스를 AEM 저장소에서 정기적으로 제거할 수 있습니다. 기본 AEM 구성을 사용하는 경우 완료된 모든 워크플로 인스턴스는 특정 시간 후에 정리됩니다. 또한 모든 검토 워크플로우가 AEM 저장소에서 제거됩니다.

자동 제거 구성에서 리뷰 워크플로 모델 \(정보\)을 제거하여 리뷰 워크플로가 자동으로 제거되지 않도록 할 수 있습니다. **Adobe Granite 워크플로 제거 구성**&#x200B;을(를) 사용하여 자동 제거 목록에서 검토 워크플로 모델을 제거해야 합니다.

**Adobe Granite 워크플로 제거 구성**&#x200B;에서 안전하게 제거할 수 있는 워크플로를 하나 이상 나열해야 합니다. 예를 들어 AEM Guides에서 만든 다음 워크플로 중 하나를 사용할 수 있습니다.

- /etc/workflow/models/publishditamap/jcr:content/model
- /etc/workflow/models/post-dita-project-creation-tasks/ jcr:content/model

**Adobe Granite 워크플로 제거 구성**&#x200B;에서 워크플로를 추가하면 AEM은 구성에 나열된 워크플로만 제거합니다. 이렇게 하면 AEM에서 검토 워크플로우 정보를 지울 수 없습니다.

**Adobe Granite 워크플로 제거 구성**&#x200B;을 구성하는 방법에 대한 자세한 내용은 AEM 설명서의 *워크플로 인스턴스 관리*&#x200B;를 참조하십시오.

### 이메일 템플릿 사용자 지정

많은 AEM Guides 워크플로우가 이메일 알림을 사용합니다. 예를 들어 검토 작업을 시작하면 검토자에게 이메일 알림이 전송됩니다. 그러나 이메일 알림이 전송되도록 하려면 AEM에서 이 기능을 활성화해야 합니다. AEM에서 전자 메일 알림을 사용하려면 AEM 설명서에서 [전자 메일 보내기](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/implementing/developing/development-guidelines.html#sending-email) 문서를 참조하십시오.

AEM Guides에는 사용자 지정할 수 있는 이메일 템플릿 세트가 포함되어 있습니다. 이러한 템플릿을 사용자 정의하려면 다음 단계를 수행하십시오.

1. 패키지 관리자를 사용하여 `/libs/fmdita/mail` 파일을 다운로드합니다.

   >[!NOTE]
   >
   > ``libs`` 노드에서 사용할 수 있는 기본 구성 파일의 사용자 지정을 만들지 마십시오. ``apps`` 노드에서 ``libs`` 노드의 오버레이를 만들고 ``apps`` 노드에서만 필요한 파일을 업데이트해야 합니다.

1. 메일 폴더에는 다음과 같은 사용자 지정 가능한 템플릿이 포함되어 있습니다.

   | 템플릿 파일 이름 | 설명 |
   |-----------------|-----------|
   | closereview.html | 이 이메일 템플릿은 리뷰 작업이 종료될 때 사용됩니다. |
   | createreview.html | 이 이메일 템플릿은 새 검토 작업을 만들 때 사용됩니다. |
   | reviewapproval.css | 이 CSS 파일에는 이메일 템플릿의 스타일이 포함되어 있습니다. |


## 사후 출력 생성 워크플로 사용자 지정 {#id17A6GI004Y4}

AEM Guides은 사후 출력 생성 워크플로우를 지정할 수 있는 유연성을 제공합니다. AEM Guides을 사용하여 생성되는 출력에서 몇 가지 후 처리 작업을 수행할 수 있습니다. 예를 들어, 생성된 AEM Site 출력에 일부 CQ 태그를 적용하거나 PDF 출력에 특정 속성을 설정하거나 출력이 생성되면 사용자 집합에 이메일을 전송할 수 있습니다.

출력 후 생성 워크플로우로 사용할 새 워크플로우 모델을 만들 수 있습니다. 사후 출력 생성 워크플로우가 트리거되면 출력 생성 워크플로우에서는 생성된 출력에 대한 처리를 수행하는 데 사용할 수 있는 워크플로우 메타데이터 맵을 통해 컨텍스트 정보를 공유합니다. 다음 표에서는 메타데이터로 공유되는 컨텍스트 정보에 대해 설명합니다.

| 속성 | 유형 | 설명 |
|--------|----|-----------|
| ``outputName`` | 문자열 | 출력을 생성하는 데 사용되는 출력 사전 설정의 이름입니다. |
| `generatedPath` | 문자열 | 생성된 출력이 저장되는 DAM의 경로. |
| `outputType` | com.adobe.fmdita.output.OutputType | 출력 사전 설정 유형. |
| `outputTitle` | 문자열 | 출력 사전 설정의 제목입니다. |
| `outputHistoryPath` | 문자열 | 기록 노드의 저장소 경로. |
| `isSuccess` | 부울 | 출력 생성 프로세스의 최종 상태(성공 또는 실패)를 나타내는 플래그입니다. |
| `logPath` | 문자열 | 출력 생성 로그가 저장되는 DAM의 경로. |
| `generatedTime` | Long | 출력 생성 프로세스가 트리거된 시간입니다. |
| `initiator` | 문자열 | 출력 생성 워크플로우를 트리거한 사용자의 사용자 ID입니다. |

출력 생성 메타데이터를 사용하기 위해 ECMA 스크립트 또는 OSGi 번들을 만들 수 있습니다. 메타데이터를 사용하는 ECMA 스크립트의 샘플은 아래에 나와 있습니다.

>[!NOTE]
>
> ``/etc/workflows/scripts`` 노드에서 이 스크립트를 만들 수 있습니다.

```javascript
var session = workflowSession.getSession(); // Obtain session object to read/write the repository.
var payload = workItem.getWorkflowData().getPayload().toString(); // Get the workflow payload (the ditamap file on which the generation was triggered)
var metadata = workItem.getWorkflowData().getMetaDataMap(); // Get the workflow metadata object
var generatedPath = metadata.get("generatedPath"); // supplied by AEM Guides
var username = metadata.get("initiator"); // supplied by AEM Guides
var successful = metadata.get("isSuccess"); // supplied by AEM Guides
var title = metadata.get("outputTitle"); // supplied by AEM Guides
var subject = "Output Generation Finished";
var message = "Generation of output " + title + " just finished " + 
(successful ? "successfully. " : "unsuccessfully. ");
    message += "It was triggered by " + username;    
if (successful) {
    message += "<br/><br/>The path to the generated output is " + 
generatedPath;
}
/*
    MailerAPI.sendMail("dl-docs-authors", subject, message);
*/
```

스크립트를 생성했으면 워크플로우에서 사용자 지정 스크립트를 호출합니다. 그런 다음 요구 사항에 따라 다른 워크플로우 프로세스를 호출할 수 있습니다. 사용자 지정 워크플로를 설계했으면 워크플로 프로세스의 마지막 단계로 *Post 생성 완료*&#x200B;를 호출합니다. *Post 생성 완료* 단계에서는 출력 생성 프로세스가 완료되면 출력 생성 작업의 상태가 *완료됨*(으)로 업데이트됩니다. 사용자 정의 사후 출력 생성 워크플로우를 만든 후 출력 생성 사전 설정을 사용하여 워크플로우를 구성할 수 있습니다. 필요한 사전 설정의 *Post 생성 워크플로 실행* 속성에서 필요한 워크플로를 선택합니다. 구성된 출력 사전 설정을 사용하여 출력 생성 작업을 실행하면 [출력] 탭의 작업 상태가 *Post 처리*(으)로 변경됩니다.
