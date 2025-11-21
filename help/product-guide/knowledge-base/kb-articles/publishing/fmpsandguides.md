---
title: AEM Guides에서 FrameMaker Publishing Server(FMPS)를 사용하여 게시
description: AEM Guides을 사용하여 FMPS로 게시
exl-id: 05d4d876-f83b-473c-bf31-14d6565e80e2
feature: AEM Guides FrameMaker Publishing Server
author: Pulkit Nagpal(punagpal)
role: User, Admin
source-git-commit: 6e23f52fc9124d0f07f8108da1b5fe574f553469
workflow-type: tm+mt
source-wordcount: '623'
ht-degree: 0%

---

# AEM Guides에서 FrameMaker Publishing Server(FMPS)를 사용하여 게시

고품질의 자동화된 게시를 원하는 경우 FrameMaker Publishing Server과 AEM Guides 통합을 사용할 수 있습니다.\
이 문서는 AEM Guides에서 FMP를 설정하고 실행하는 데 도움이 됩니다.

## FMPS와 AEM Guides의 호환성

- 4.1 AEM Guides과의 호환성: [4.1 호환성 매트릭스](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/release-info/release-notes/on-prem-release-notes/release-notes-4.1.html?lang=ko/#compatibility-matrix)
- 4.0 AEM Guides과의 호환성: [4.0 호환성 매트릭스](https://helpx.adobe.com/xml-documentation-for-experience-manager/release-note/release-notes-xml-documentation-solution-4-0.html/#Compatibility%20matrix)
- 최신 릴리스: [최신 릴리스 정보](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/release-info/latest-release-info.html?lang=ko)

## 설치

AEM Guides 및 FMPS 설치 및 구성은 다음을 참조하십시오

### AEM Guides

설치 및 구성 참조: [4.1 설치 및 구성](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-1-2/Adobe-Experience-Manager-Guides_Installation-Configuration-Guide_EN.pdf)

### FMPS

FMPS 설치의 경우 제공된 [YouTube 링크](https://www.youtube.com/watch?v=2deelyM5VA8&t) 또는 [FMPS 설치 및 구성](https://help.adobe.com/en_US/framemaker/server/index.html#t=fmps-user-guide%2Finstall_config_fmps.html%23install_config_fmps&rhtocid=_2)을 참조할 수 있습니다.

## 필수 구성

FrameMaker Publishing Server(FMPS)를 사용하여 DITA 콘텐츠를 생성할 수 있습니다. FMPS는 다양한 출력 형식을 지원합니다. 웹 콘솔에서 &quot;com.adobe.fmdita.config.ConfigManager 번들&quot;의 다음 속성을 수정하여 AEM Guides에서 FMPS를 사용하도록 구성합니다.

웹 콘솔을 열려면 URL 액세스 http://\&lt;server name\>:\&lt;port\>/system/console/configMgr로 이동합니다.

**구성 속성 및 설명** [4.1 설치 및 구성](https://helpx.adobe.com/content/dam/help/en/xml-documentation-solution/4-1-2/Adobe-Experience-Manager-Guides_Installation-Configuration-Guide_EN.pdf#page=89)

## 테스트 실행:

FFMPS를 사용하여 DITA 및 FM Assets에 대해 **PDF, 반응형 HTML5** 및 **Epub**&#x200B;을(를) 자동으로 게시할 수 있습니다.

&quot;다음을 사용하여 PDF 생성&quot; 메뉴에서 FrameMaker Publishing Server을 선택합니다.

사용자는 &quot;settings File(.sts)&quot; 및 &quot;ditaval&quot;을 제공할 수 있습니다. 필터링은 제공한 조건에 따라 간격을 사용하여 수행됩니다.

- **설정 파일**: 게시할 때 FMPS에 적용할 모든 설정이 들어 있는 FrameMaker /FMPS 게시 설정 파일입니다. 예를 들어, 사용자 지정된 템플릿으로 출력을 생성하고, 마크 및 재단 물림(PDF)을 만들고, TOC를 사용하여 PDF을 만드는 작업이 있습니다.
- **FMPS 사전 설정:** Ditaval과 설정 파일의 사전 정의된 조합입니다. 사용자는 별도의 간격 및 설정 파일을 제공하는 대신 게시 요구에 다시 사용할 수 있는 FMPS 사전 설정을 미리 만들 수 있습니다.

**참고:** 설정이나 FMPS 사전 설정을 선택하지 않으면 FMPS에서 기본 시스템 설정을 사용하여 게시합니다.

FMPS 사전 설정을 선택하고 사용자 지정 설정 또는 AEM의 차등 파일도 제공하면 충돌합니다. 이 경우 FMPS 사전 설정이 사용자 지정 설정 또는 간격 파일보다 우선합니다.

### FMPS를 사용한 기준선 게시:

FMPS2020.0.2 이상 버전으로 이미 생성된 기준선을 게시할 수 있습니다.

**시작할 샘플 FMPS 설정 파일(.sts 파일):** [샘플 FMPS 설정 파일](https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:ef750752-7a7e-4e51-923e-6b7d9861ed54)&#x200B;(이 파일의 압축 풀기)

## FAQ 및 문제 해결:

- ### FMPS 게시가 &quot;시간 초과 예외&quot;로 실패합니다.

>/system/console/configMgr/com.adobe.fmdita.config.ConfigManager에서 &quot;FMPS 시간 초과&quot;(초) 값을 확인하고 늘립니다.&quot;

- ### 드롭다운에서 FMPS 사전 설정을 가져올 수 없음

>서버에 사전 정의된 FMPS 사전 설정이 만들어져 있고 연결 설정이 올바른지 확인하십시오.

- ### 게시할 때 빈 PDF가 표시됨

>UUID를 사용하는 경우 FrameMaker 편집 환경 설정에서 &quot;UUID 기반 참조 사용&quot;을 선택하고 반대로 UUID가 아닌 AEM 안내서를 선택했는지 확인합니다.

- ### 내 설정/distaval이 최종 게시된 출력에 적용되지 않음

>FMPS 사전 설정과 설정/diaval 파일을 동시에 선택하지 않는지 확인합니다. FrameMaker을 사용하여 출력을 수동으로 확인합니다.

- ### 기준선이 FMPS에서 게시되지 않음

>FMPS2020.0.2 이상 버전은 기준 게시와 호환됩니다.
>기준선이 제대로 생성되었는지 확인합니다. 확인하려면 맵 대시보드— 항목으로 이동합니다. 다운로드  &quot;기준선 사용&quot;을 매핑하고 선택합니다.

- ### FMPS에서 작업을 게시하는 데 다른 엔진보다 시간이 더 걸립니다.

>FMPS에서 게시할 때 이상적인 고정 헤더 시간은 약 3~4분입니다. 더 길다고 생각되면 FMPS 관리자에게 문의하거나 Adobe 지원 팀에 문의하십시오.

## 기타 리소스:

[FMPS 학습 및 지원](https://helpx.adobe.com/kr/support/framemaker-publishing-server.html)

[AEM Guides 학습 및 지원](https://helpx.adobe.com/in/support/xml-documentation-for-experience-manager.html)

[FrameMaker 및 FMPS 커뮤니티](https://community.adobe.com/t5/framemaker/ct-p/ct-framemaker?page=1&sort=latest_replies&lang=all&tabid=all)

[AEM Guides 커뮤니티](https://experienceleaguecommunities.adobe.com/t5/experience-manager-guides/ct-p/aem-xml-documentation?profile.language=ko)
