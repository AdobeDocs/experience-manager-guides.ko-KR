---
title: 사후 처리 이벤트 핸들러
description: 사후 처리 이벤트 처리기에 대해 알아보기
exl-id: 3b105ff5-02d4-40e3-a713-206a7fcf18b2
feature: Post-Processing Event Handler
role: Developer
level: Experienced
source-git-commit: 83966cc9187b13dd3b5956821e0aa038b41db28e
workflow-type: tm+mt
source-wordcount: '198'
ht-degree: 5%

---

# 사후 처리 이벤트 핸들러 {#id175UB30E05Z}

AEM Guides은 사후 처리 작업을 수행하는 데 사용되는 com/adobe/fmdita/postprocess/complete 이벤트를 노출합니다. 이 이벤트는 DITA 파일에서 작업을 수행할 때마다 트리거됩니다. DITA 파일에 대한 다음 작업은 이 이벤트를 트리거합니다.

>[!NOTE]
>
> 이 이벤트는 AEM 6.1의 삭제 작업에 대해 트리거되지 않습니다.

- 업로드
- 만들기
- 수정
- 삭제

이 이벤트에서 사용할 수 있는 속성을 읽고 추가 처리를 수행하려면 AEM 이벤트 처리기를 만들어야 합니다.

이벤트 세부 사항은 아래에 설명되어 있습니다.

**이벤트 이름**:

```
com/adobe/fmdita/postprocess/complete 
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `path` | 문자열 | 이 이벤트를 트리거한 파일의 경로입니다. 일반적으로 작업이 수행된 파일입니다. |
| `status` | 문자열 | 수행된 작업의 반환 상태입니다. 가능한 옵션은 다음과 같습니다. - <br>- 성공: 사후 처리 작업이 완료되었습니다. <br>- 완료되었으나 오류가 발생했습니다. 사후 처리 작업이 완료되었지만 일부 오류가 발생했습니다. <br>- 실패: 일부 치명적인 오류로 인해 사후 처리 작업이 실패했습니다. |
| `message` | 문자열 | 상태가 COMPLETED WITH ERRORS 또는 FAILED인 경우 이 매개변수에는 오류 또는 실패 이유에 대한 세부 정보가 포함됩니다. |
| `operation` | 문자열 | 파일에서 수행된 후 처리 작업입니다. 가능한 옵션은 다음과 같습니다. <br>- 추가 <br>- 업데이트 <br>- 삭제 |
