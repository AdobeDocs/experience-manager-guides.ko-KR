---
title: 워크플로우 구성 및 사용자 정의
description: 워크플로우 구성 및 사용자 지정 방법 알아보기
exl-id: 3be387b9-6ac2-4b61-afdf-fbe9d8b6cc1e
feature: Workflow Configuration
role: Admin
level: Experienced
source-git-commit: 3f61aa6615a1b9765154d55249a33136443dfa33
workflow-type: tm+mt
source-wordcount: '1856'
ht-degree: 2%

---

# 워크플로우 구성 및 사용자 정의 {#id181AI0OJ0RO}

워크플로우를 통해 Adobe Experience Manager \(AEM\) 활동을 자동화할 수 있습니다. 워크플로우는 특정 순서로 실행되는 일련의 단계로 구성됩니다. 각 단계에서 실행할 개별 활동을 정의할 수 있습니다. 예를 들어 주제 검토를 만들 때 그룹의 모든 검토자에게 이메일 알림을 보낼 수 있습니다. 또는 출력 생성 작업이 완료되면 게시자에게 알림을 보냅니다.

AEM의 워크플로우에 대한 자세한 내용은 다음을 참조하십시오.

- [워크플로우 관리](https://helpx.adobe.com/kr/experience-manager/6-5/sites/administering/using/workflows.html)

- 워크플로 적용 및 참여: [워크플로를 사용하여 작업](https://helpx.adobe.com/kr/experience-manager/6-5/sites/authoring/using/workflows.html).

- 워크플로 모델 만들기 및 워크플로 기능 확장: [워크플로 개발 및 확장](https://helpx.adobe.com/kr/experience-manager/6-5/sites/developing/using/workflows.html).

- 중요한 서버 리소스를 사용하는 워크플로우의 성능을 개선합니다. [동시 워크플로우 처리](https://helpx.adobe.com/kr/experience-manager/6-5/sites/deploying/using/configuring-performance.html#ConfiguringforPerformance).


이 항목의 섹션에서는 AEM Guides에서 제공되는 기본 워크플로우에서 수행할 수 있는 다양한 사용자 정의에 대해 설명합니다.

## 리뷰 워크플로 사용자 지정 {#id176NE0C00HS}

모든 조직의 콘텐츠 작성 팀은 비즈니스 요구 사항을 충족하기 위해 특정 방식으로 작업합니다. 일부 조직에서는 전용 편집기가 있는 반면, 다른 조직에서는 편집 검토 시스템을 자동화할 수 있습니다. 예를 들어 조직에서 일반적인 작성 및 게시 작업 과정에는 작성자가 컨텐츠 작성을 완료할 때마다 검토자에게 자동으로 전달되고 검토가 완료되면 최종 출력을 생성하기 위해 게시자에게 전달되는 등의 작업이 포함될 수 있습니다. AEM에서 컨텐츠 및 에셋에서 수행하는 활동은 프로세스 형태로 결합되어 AEM 워크플로우에 매핑될 수 있습니다. AEM의 워크플로에 대한 자세한 내용은 AEM 설명서에서 [워크플로 관리](https://helpx.adobe.com/kr/experience-manager/6-5/sites/administering/using/workflows.html)를 참조하십시오.

AEM Guides을 사용하면 기본 검토 워크플로를 사용자 지정할 수 있습니다. 다른 작성 또는 게시 작업 과정에서 다음 네 가지 사용자 정의 검토 관련 프로세스를 사용할 수 있습니다.

- **검토 만들기**: 이 프로세스는 검토 작업을 만드는 데 필요한 메타데이터를 준비합니다. 예를 들어 검토자에게 검토 권한을 할당하고, 주제 상태를 검토 중으로 설정하며, 검토 타임라인을 설정하는 등의 작업을 수행합니다. 이 네 가지 프로세스 중 사용자 정의 워크플로우에 포함되어야 하는 유일한 필수 프로세스입니다. 워크플로우에서 다른 세 가지 프로세스를 포함하거나 제외하도록 선택할 수 있습니다.

- **검토 작업 할당**: 이 프로세스는 검토 작업을 만들고 개시자 및 검토자에게 작업 알림을 보냅니다.

- **검토 전자 메일 보내기**: 이 프로세스는 검토 전자 메일을 시작자 및 검토자에게 보냅니다.

- **검토를 종료하도록 작업 예약**: 이 프로세스에서는 기한 도달 시 검토 프로세스가 완료되도록 합니다.


사용자 정의 검토 워크플로우를 만들 때 첫 번째 작업은 검토 만들기 프로세스에 필요한 필수 메타데이터를 설정하는 것입니다. 이를 위해 ECMA 스크립트를 만들 수 있습니다. 메타데이터를 할당하는 ECMA 스크립트의 샘플은 두 주제 및 맵 모두에 대해 아래에 나와 있습니다.

**주제**

```json
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
workflowdata.getMetaDataMap().put("reviewType", "AEM");
workflowdata.getMetaDataMap().put("versionJson", "[{\"path\":\"GUID-ca6ae229-889a-4d98-a1c6-60b08a820bb3.dita\",\"review\":true,\"version\":\"1.0\",\"reviewers\":[\"projects-samplereviewproject-owner\"]}]");
workflowdata.getMetaDataMap().put("isDitamap","false");
```

**맵용**

```json
var workflowdata = workItem.getWorkflowData();
workflowdata.getMetaDataMap().put("initiator", "admin");
workflowdata.getMetaDataMap().put("operation", "AEM_REVIEW");
workflowdata.getMetaDataMap().put("orgTopics", "GUID-ae42f13c-7201-4453-9a3a-c87675a5868e.dita|GUID-28a6517b-1b62-4d3a-b7dc-0e823225b6a5.dita|GUID-dd699e10-118d-4f1b-bf19-7f1973092227.dita|");
var payloadJson = "{\"referrer\":\"\",\"rootMap\":\"GUID-17feb385-acf3-4113-b838-77b11fd6988d.ditamap\",\"asset\":[\"GUID-17feb385-acf3-4113-b838-77b11fd6988d.ditamap\"],\"base\":\"/content/dam\"}";
workflowdata.getMetaDataMap().put("payloadJson", payloadJson);
workflowdata.getMetaDataMap().put("deadline", "2047-06-27T13:19:00.000+05:30");
workflowdata.getMetaDataMap().put("title", "Review task via workflow with map");
workflowdata.getMetaDataMap().put("description", "Review task via workflow with map Description");
workflowdata.getMetaDataMap().put("assignee", "user-one");
workflowdata.getMetaDataMap().put("status", "1");
workflowdata.getMetaDataMap().put("projectPath", "/content/projects/review_project_via_workflow");
workflowdata.getMetaDataMap().put("startTime", new Date().getTime());
var versionJson = "[{\"path\":\"GUID-ae42f13c-7201-4453-9a3a-c87675a5868e.dita\",\"version\":\"1.0\",\"review\":true,\"reviewers\":[\"starling-regression-user\"]},{\"path\":\"GUID-28a6517b-1b62-4d3a-b7dc-0e823225b6a5.dita\",\"version\":\"1.0\",\"review\":true,\"reviewers\":[\"starling-regression-user\"]},{\"path\":\"GUID-dd699e10-118d-4f1b-bf19-7f1973092227.dita\",\"version\":\"1.0\",\"review\":true,\"reviewers\":[\"starling-regression-user\"]}]";
workflowdata.getMetaDataMap().put("versionJson", versionJson);
workflowdata.getMetaDataMap().put("notifyViaEmail", "true");
workflowdata.getMetaDataMap().put("allowAllReviewers", "false");
workflowdata.getMetaDataMap().put("isDitamap", "true");
workflowdata.getMetaDataMap().put("ditamap", "GUID-17feb385-acf3-4113-b838-77b11fd6988d.ditamap");
var ditamapHierarchy = "[{\"path\":\"GUID-17feb385-acf3-4113-b838-77b11fd6988d.ditamap\",\"items\":[{\"path\":\"GUID-db5787bb-5467-4dc3-b3e5-cfde562ee745.ditamap\",\"items\":[{\"path\":\"GUID-ae42f13c-7201-4453-9a3a-c87675a5868e.dita\",\"items\":[],\"title\":\"\"},{\"path\":\"GUID-28a6517b-1b62-4d3a-b7dc-0e823225b6a5.dita\",\"items\":[],\"title\":\"\"}],\"title\":\"\"},{\"path\":\"GUID-dd699e10-118d-4f1b-bf19-7f1973092227.dita\",\"items\":[],\"title\":\"\"}]}]";
workflowdata.getMetaDataMap().put("ditamapHierarchy", ditamapHierarchy);
```

`/etc/workflows/scripts` 노드에서 이 스크립트를 만들 수 있습니다. 다음 표에서는 이 ECMA 스크립트에 의해 지정되는 속성에 대해 설명합니다.

| 속성 | 유형 | 설명 |
|--------|----|-----------|
| `initiator` | 문자열 | 검토 작업을 시작하는 사용자의 사용자 ID입니다. |
| `operation` | 문자열 | 정적 값이 `AEM_REVIEW`(으)로 설정되었습니다. |
| `orgTopics` | 문자열 | 검토를 위해 공유 중인 주제 경로. 쉼표로 구분된 여러 주제를 지정합니다. |
| `payloadJson` | JSON 오브젝트 | 다음 값 <br> - `base`: 검토를 위해 보낸 항목이 포함된 상위 폴더의 경로를 지정하십시오.<br>- `asset`: 검토를 위해 보낸 주제의 경로입니다. <br>- `referrer`: 비워 둡니다. |
| `deadline` | 문자열 | 시간을 `yyyy-MM-dd'T'HH:mm:ss.SSSXXX` 형식으로 지정하십시오. |
| `title` | 문자열 | 리뷰 작업의 제목을 입력합니다. |
| `description` | 문자열 | 검토 작업에 대한 설명을 입력합니다. |
| `assignee` | 문자열 | 검토를 위해 주제를 보낼 사용자의 사용자 ID입니다. |
| `status` | 정수 | 정적 값을 1로 설정합니다. |
| `startTime` | Long | `System.currentTimeMillis()` 함수를 사용하여 현재 시스템 시간을 가져옵니다. |
| `projectPath` | 문자열 | 검토 작업이 할당될 검토 프로젝트의 경로(예: /content/projects/sampleereviewproject). |
| `reviewType` | 문자열 | 정적 값 &quot;AEM&quot;. |
| `versionJson` | JSON 오브젝트 | versionJson은 각 주제 개체에 다음 구조 { &quot;path&quot;: &quot;/content/dam/1-topic.dita&quot;, &quot;version&quot;: &quot;1.1&quot;, &quot;review&quot;: true, &quot;reviewers&quot;: [&quot;projects-we_retail-editor&quot;] }가 있는 검토 중인 주제 목록입니다. |
| `isDitamap` | 부울 | false/true |
| `ditamapHierarchy` | JSON 오브젝트 | 맵을 검토용으로 보내는 경우 여기에 있는 값은 다음과 같아야 합니다.[ { &quot;path&quot;: &quot;GUID-f0df1513-fe07-473f-9960-477d4df29c87.ditamap&quot;, &quot;items&quot;: [ { &quot;path&quot;: &quot;GUID-9747e8ab-8cf1-45dd-9e20-d47d482f667d.dita&quot;, &quot;title&quot;: &quot;&quot;, &quot;items&quot;: [] } ] } ]. |
| `ditamap` | 문자열 | 리뷰 작업의 ditamap 경로 지정 |
| `allowAllReviewers` | 부울 | false/true |
| `notifyViaEmail` | 부울 | false/true |


스크립트를 만들었으면 워크플로우에서 검토 만들기 프로세스를 호출하기 전에 스크립트를 호출합니다. 그런 다음 요구 사항에 따라 다른 검토 워크플로우 프로세스를 호출할 수 있습니다.

### 제거 구성에서 검토 워크플로우 제거

워크플로우 엔진 성능을 향상시키기 위해 AEM 저장소에서 완료된 워크플로우 인스턴스를 정기적으로 제거할 수 있습니다. 기본 AEM 구성을 사용하는 경우 완료된 모든 워크플로 인스턴스는 특정 시간 후에 정리됩니다. 또한 모든 검토 워크플로우가 AEM 저장소에서 제거됩니다.

자동 제거 구성에서 리뷰 워크플로 모델 \(정보\)을 제거하여 리뷰 워크플로가 자동으로 제거되지 않도록 할 수 있습니다. 자동 제거 목록에서 검토 워크플로 모델을 제거하려면 **Adobe Granite 워크플로 제거 구성**&#x200B;을 사용해야 합니다.

**Adobe Granite 워크플로 제거 구성**&#x200B;에서 안전하게 제거할 수 있는 워크플로를 하나 이상 나열해야 합니다. 예를 들어 AEM Guides에서 만든 다음 워크플로 중 하나를 사용할 수 있습니다.

- /etc/workflow/models/publishditamap/jcr:content/model
- /etc/workflow/models/post-dita-project-creation-tasks/ jcr:content/model

**Adobe Granite 워크플로 제거 구성**&#x200B;에서 워크플로를 추가하면 AEM은 구성에 나열된 워크플로만 제거합니다. 이렇게 하면 AEM에서 검토 워크플로우 정보를 지울 수 없습니다.

**Adobe Granite 워크플로 제거 구성**&#x200B;을 구성하는 방법에 대한 자세한 내용은 AEM 설명서에서 *워크플로 인스턴스 관리*&#x200B;를 참조하십시오.

### 이메일 템플릿 사용자 지정

많은 AEM Guides 워크플로우가 이메일 알림을 사용합니다. 예를 들어 검토 작업을 시작하면 검토자에게 이메일 알림이 전송됩니다. 그러나 이메일 알림이 전송되도록 하려면 AEM에서 이 기능을 활성화해야 합니다. AEM에서 전자 메일 알림을 사용하려면 AEM 설명서의 [전자 메일 알림 구성](https://experienceleague.adobe.com/docs/experience-manager-release-information/aem-release-updates/previous-updates/aem-previous-versions.html?lang=ko-KR) 문서를 참조하십시오.

AEM Guides에는 사용자 지정할 수 있는 이메일 템플릿 세트가 포함되어 있습니다. 이러한 템플릿을 사용자 정의하려면 다음 단계를 수행하십시오.

1. AEM에 로그인한 다음 CRXDE Lite 모드를 엽니다.

1. 네비게이터 탭에서 다음 위치로 이동합니다.

   `/libs/fmdita/mail`

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

AEM Guides은 사후 출력 생성 워크플로우를 지정할 수 있는 유연성을 제공합니다. AEM Guides을 사용하여 생성되는 출력에서 일부 후처리 작업을 수행할 수 있습니다. 예를 들어, 생성된 AEM 사이트 출력에 일부 CQ 태그를 적용하거나 PDF 출력에 특정 속성을 설정하거나, 출력이 생성되면 사용자 집합에 이메일을 전송할 수 있습니다.

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

```json
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

스크립트를 생성했으면 워크플로우에서 사용자 지정 스크립트를 호출합니다. 그런 다음 요구 사항에 따라 다른 워크플로우 프로세스를 호출할 수 있습니다. 사용자 지정 워크플로를 설계했으면 워크플로 프로세스의 마지막 단계로 *게시물 생성 완료*&#x200B;를 호출합니다. *게시물 생성 완료* 단계에서는 출력 생성 프로세스가 완료되면 출력 생성 작업의 상태가 *완료됨*(으)로 업데이트됩니다. 사용자 정의 사후 출력 생성 워크플로우를 만든 후 출력 생성 사전 설정을 사용하여 워크플로우를 구성할 수 있습니다. 필요한 사전 설정의 *사후 생성 워크플로 실행* 속성에서 필요한 워크플로를 선택하십시오. 구성된 출력 사전 설정을 사용하여 출력 생성 작업을 실행하면 [출력] 탭의 작업 상태가 *사후 처리*(으)로 변경됩니다.

## 자산 업데이트 워크플로우 사용자 지정 {#id18C3D0I0B5Z}

기본적으로 *DAM 자산 업데이트* 워크플로는 AEM 자산 \(XML 또는 비 XML\)을 만들거나 업데이트할 때마다 트리거됩니다. 예를 들어 항목을 만들거나 업데이트하면 *DAM 자산 업데이트* 워크플로우가 실행됩니다. *DAM 자산 업데이트* 워크플로우에서 Assets에서 관련 메타데이터를 추출하려고 합니다. 기본 *자산 업데이트 워크플로*&#x200B;에는 DITA 파일에서 관련 메타데이터를 추출하는 단계가 없으며 *DAM 자산 업데이트* 워크플로는 실행 시 많은 로그를 생성합니다. 추가 로그를 방지하려면 모든 XML 파일을 처리하지 않도록 워크플로우를 구성할 수 있습니다.

*DAM 자산 업데이트* 워크플로우를 사용자 지정하려면 다음 단계를 수행하십시오.

1. **워크플로 시작** 페이지를 엽니다.

   워크플로우 런처 페이지에 액세스하기 위한 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/libs/cq/workflow/admin/console/content/launchers.html
   ```

1. 워크플로우 시작 목록에서 **DAM 자산 업데이트** 워크플로우의 속성을 엽니다.

1. 다음 표현식으로 조건을 추가합니다.

   ```json
   jcr:content/metadata/dc:format!=application/xml
   ```

1. **저장 및 닫기** 클릭


## 사후 처리 XML 워크플로우 구성 {#id18CJB03J0Y4}

AEM Guides은 AEM의 DITA 콘텐츠로 작업할 수 있도록 해주는 다양한 워크플로우를 만듭니다. 예를 들어 DITA 콘텐츠를 업로드하거나 기존 콘텐츠를 업데이트할 때 실행되는 워크플로우가 있습니다. 이러한 워크플로는 DITA 문서를 구문 분석하고 메타데이터 설정, 새 DITA 맵에 기본 출력 사전 설정 추가 및 기타 관련 작업과 같은 다양한 작업을 수행합니다.

>[!NOTE]
>
> 기본 사후 처리 워크플로를 사용자 지정하거나 확장하려면 Adobe Experience Manager Guides의 *API 참조*&#x200B;에 설명된 사후 처리 이벤트 처리기를 사용할 수 있습니다.

다음 속성은 AEM Guides이 사후 처리 워크플로우를 실행하는 방법을 제어합니다.

>[!NOTE]
>
> 웹 콘솔을 통해 다음 속성에 액세스할 수 있습니다. http://&lt;server name\>:&lt;port\>/system/console/configMgr.

| 속성 | 번들 이름 | 설명 |
|--------|-----------|-----------|
| 다이내믹 아웃바운드 | `com.adobe.fmdita.postprocess.PostProcessObservation` | 사후 처리가 수행되지 않은 모든 파일의 경우 주제 파일을 구문 분석하여 나가는 참조를 검색합니다. 처리할 파일 수가 많은 경우 시스템을 오버로드할 수 있으므로 이 옵션을 비활성화하는 것이 좋습니다. |
| 사후 프로세스 Threads | `com.adobe.fmdita.config.ConfigManager` | 사후 처리 워크플로에 사용할 사후 처리 스레드 수를 설정합니다. <br>기본값은 1입니다. |
