---
title: 전환 프로세스 이벤트 핸들러
description: 전환 프로세스 이벤트 처리기에 대해 알아보기
exl-id: 8033935d-2113-4e39-ab74-b7431b89f948
feature: Conversion Process Event Handler
role: Developer
level: Experienced
source-git-commit: 83966cc9187b13dd3b5956821e0aa038b41db28e
workflow-type: tm+mt
source-wordcount: '189'
ht-degree: 3%

---

# 전환 프로세스 이벤트 핸들러 {#id175UB30E05Z}

AEM Guides은 문서 변환 프로세스가 완료된 후 사후 처리 작업을 수행하는 데 사용되는 com/adobe/fmdita/conversion/complete 이벤트를 노출합니다. 이 이벤트는 DITA가 아닌 문서가 DITA 파일 형식으로 마이그레이션될 때마다 트리거됩니다. 예를 들어 Word에서 DITA로 변환 또는 InDesign에서 DITA로 변환 프로세스를 실행하는 경우 변환 프로세스가 끝난 후 이 이벤트가 호출됩니다.

이 이벤트에서 사용할 수 있는 속성을 읽고 추가 처리를 수행하려면 AEM 이벤트 처리기를 만들어야 합니다.

이벤트 세부 사항은 아래에 설명되어 있습니다.

**이벤트 이름**:

```HTTP
com/adobe/fmdita/conversion/complete 
```

**매개 변수**:

| 이름 | 유형 | 설명 |
|----|----|-----------|
| `status` | 문자열 | 수행된 작업의 반환 상태입니다. 가능한 옵션은 다음과 같습니다.   성공: 전환 프로세스가 완료되었습니다. <br> -   완료되었으나 오류 발생: 변환 프로세스가 완료되었으나 일부 오류가 발생했습니다. <br>-   FAILED: 치명적인 오류로 인해 변환 프로세스가 실패했습니다. |
| `filePath` | 문자열 | AEM 저장소에 있는 소스 파일 \(변환할\)의 절대 경로입니다. |
| `outputPath` | 문자열 | 변환된 DITA 파일을 저장할 대상 위치의 절대 경로입니다. |
| `logPath` | 문자열 | 전환 로그가 저장될 노드의 절대 경로입니다. |
