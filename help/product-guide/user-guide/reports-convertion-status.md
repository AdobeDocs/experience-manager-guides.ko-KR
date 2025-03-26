---
title: 전환 상태 보고서
description: 다양한 형식의 문서를 AEM Guides에서 DITA로 변환합니다. 필터를 추가하고 전환 상태 보고서를 보는 방법에 대해 알아봅니다.
exl-id: 0a4699e5-865f-40e1-a17f-5e1a248ea955
feature: Report Generation
role: User
source-git-commit: ac83f613d87547fc7f6a18070545e40ad4963616
workflow-type: tm+mt
source-wordcount: '319'
ht-degree: 0%

---

# 전환 상태 보고서 {#id205BBA00WZZ}

Adobe Experience Manager Guides은 다양한 형식의 문서를 DITA로 변환하는 강력한 변환 기능을 제공합니다. 전환 상태 보고서는 Experience Manager Guides에서 실행하는 모든 전환 작업에 대한 통합 보기를 제공합니다.

전환 상태 보고서를 보려면 다음 단계를 수행하십시오.

1. 맨 위에 있는 Adobe Experience Manager 로고를 선택하고 **도구**&#x200B;를 선택합니다.

1. 도구 목록에서 **안내서**&#x200B;를 선택합니다.

1. **전환 상태 보고서** 타일을 선택하십시오.

   변환 상태 보고서는 시스템에서 실행되는 모든 변환 작업에 대해 표시됩니다.

   ![](images/conversion-status-report-new.png){align="left"}

1. 보고서 페이지는 두 부분으로 나뉘어져 있습니다.

   - **필터:**

     파일 유형 및 전환 상태를 기반으로 보고서 데이터를 필터링할 수 있습니다. 파일 형식에서 Word 문서, 구조화된 HTML, XML, DocBook 및 IDML 유형의 문서에 대한 보고서 데이터를 보도록 선택할 수 있습니다. 상태에서 성공적으로 실행됨, 실패됨, 활성 또는 큐에 있는 작업에 대한 보고서 데이터를 보도록 선택할 수 있습니다.

     다음 스크린샷에는 성공 상태인 전환 작업에 대한 보고서 데이터가 표시됩니다.

     ![](images/conversion-report-failed-active-queued-new.png){align="left"}

   - **보고서 데이터:**

     보고서 데이터에는 다음 열이 포함되어 있습니다.

      - **파일 이름**: 변환 프로세스가 실행된 원본 파일의 이름입니다. 파일 이름 링크를 선택하면 소스 문서 위치로 이동합니다.

      - **파일 형식**: 원본 문서의 형식이며 Word, 구조화된 HTML, XML, IDML 및 DocBook일 수 있습니다.

      - **추가한 사람**: 전환 작업을 실행한 사용자의 이름입니다.

      - **추가된 날짜**: 작업이 실행된 날짜. 추가한 날짜 링크를 선택하면 로그 파일이 다운로드됩니다.

      - **경로**: 원본 문서의 전체 경로입니다.

      - **상태**: 전환 작업의 상태(성공, 실패, 활성 또는 큐에 있음)입니다.

      - **출력**: 성공적으로 변환된 문서의 경로입니다. 출력(Output) 링크를 선택하면 출력이 저장된 위치로 이동합니다.


**상위 항목:**[&#x200B;보고서 소개](reports-intro.md)
