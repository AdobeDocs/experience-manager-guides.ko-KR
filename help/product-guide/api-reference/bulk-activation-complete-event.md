---
title: 일괄 활성화 완료 이벤트 핸들러
description: 벌크 활성화 완료 이벤트 핸들러에 대해 알아보기
feature: Bulk Activation Event Handler
role: Developer
level: Experienced
exl-id: 08b153d7-3d13-4804-9e3e-38790dbea1f3
source-git-commit: e40ebf4122decc431d0abb2cdf1794ea704e5496
workflow-type: tm+mt
source-wordcount: '185'
ht-degree: 1%

---

# 일괄 활성화 완료 이벤트 핸들러

Experience Manager Guides은 일괄 활성화 프로세스가 완료된 후 작업을 수행하는 데 사용되는 `com/adobe/fmdita/replication/complete` 이벤트를 노출합니다. 이 이벤트는 일괄 활성화 프로세스가 완료될 때마다 트리거됩니다. 예를 들어 맵의 AEM 사이트 사전 설정의 벌크 활성화를 실행하는 경우 이 이벤트는 활성화 프로세스가 끝난 후 호출됩니다.

이 이벤트에서 사용할 수 있는 속성을 읽고 추가 처리를 수행하려면 AEM 이벤트 처리기를 만들어야 합니다.

이벤트 세부 사항은 아래에 설명되어 있습니다.

**이벤트 이름**:

```
com/adobe/fmdita/replication/complete 
```

**매개 변수**:
이름|유형|설명|
---- ---------------
|`path`|문자열|이 이벤트를 트리거한 파일의 경로입니다. <br> 예: `/content/output/sites/ditamap1-ditamap`. <br> JSON 배열로 직렬화된 경로 목록입니다.|
|`messageType`|문자열|메시지 유형입니다. <br>가능한 옵션: `REPLICATION`|
|`action`|문자열|수행된 작업입니다. <br>가능한 옵션: `BulkReplicate`|
|`user`|문자열|작업을 시작한 사용자입니다.|
|`result`|문자열|일괄 활성화 결과. 직렬화된 JSON 개체입니다. <br>`{"success":boolean,"code":integer,"message":"" }`|
|`agentId`|문자열|복제에 사용된 에이전트 ID입니다. 예: `"publish"`|
|`importMode`|문자열|활성화에 사용되는 가져오기 모드입니다. 가능한 옵션은 <br>`REPLACE, MERGE, UPDATE`입니다.|


**샘플 이벤트 수신기**:

```XML
@Component(service = EventHandler.class,
        immediate = true,
        property = {
                EventConstants.EVENT_TOPIC + "=" + "com/adobe/fmdita/replication/complete",
        })
 
public class SampleEventHandler implements EventHandler {
 
    protected final Logger log = LoggerFactory.getLogger(this.getClass());
 
    @Override
    public void handleEvent(final Event event) {
        Map<String, String> properties = new HashMap<>();
        properties.put("paths", (String) event.getProperty("paths"));
        properties.put("messageType", (String) event.getProperty("messageType"));
        properties.put("action", (String) event.getProperty("action"));
        properties.put("result", (String) event.getProperty("result"));
        properties.put("user", (String) event.getProperty("user"));
        properties.put("agentId", (String) event.getProperty("agentId"));
        properties.put("importMode", (String) event.getProperty("importMode"));
 
        String eventTopic = event.getTopic();
        log.debug("eventTopic {}", eventTopic);
        for(Map.Entry entry:properties.entrySet()) {
            log.debug(entry.getKey() + " : " + entry.getValue());
        }
 
    }
}
```
