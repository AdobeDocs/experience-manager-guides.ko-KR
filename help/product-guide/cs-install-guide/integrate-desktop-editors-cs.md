---
title: 데스크탑 기반 XML 편집기 통합
description: 데스크탑 기반 XML 편집기를 통합하는 방법 알아보기
feature: Publishing FrameMaker Documents
role: Admin
level: Experienced
source-git-commit: b3ae1c02d3055fe15257d5de0365d30e7af21afb
workflow-type: tm+mt
source-wordcount: '363'
ht-degree: 1%

---

# 데스크탑 기반 XML 편집기 통합

다양한 XML 편집기가 시판되고 있으며 이미 사용하고 있을 수도 있습니다. Adobe FrameMaker은 AEM 커넥터와 함께 제공되는 가장 강력한 XML 편집기 중 하나입니다. FrameMaker에서 AEM 커넥터를 사용하면 AEM 리포지토리와 쉽게 연결하고, 파일을 체크 아웃 및 체크 인하고, FrameMaker에서 직접 파일을 편집할 수 있습니다. 웹 편집기에서 FrameMaker을 실행하도록 Experience Manager Guides을 구성할 수도 있습니다. 파일을 FrameMaker에서 열면 파일을 편집하고 AEM 저장소에 다시 체크 인할 수 있습니다.

## 웹 편집기의 FrameMaker에서 파일 편집 사용

FrameMaker 또는 다른 DITA 편집기를 사용하여 DITA 컨텐트를 만들고 업데이트할 수 있습니다. 그러나 조직에서 FrameMaker을 DITA 편집기로 사용하는 경우 AEM의 FrameMaker에서 직접 DITA 문서를 열 수 있는 옵션을 사용자에게 제공할 수 있습니다.


기본적으로 사용자는 AEM 도구 모음에 **FrameMaker에서 열기** 단추가 표시되지 않습니다. 다음 단계를 수행하여 AEM 도구 모음에 이 단추를 추가합니다.

구성 파일을 만들려면 [구성 재정의](download-install-additional-config-override.md#)의 지침을 사용하십시오. 구성 파일에서 다음 \(property\) 세부 정보를 입력하여 AEM 도구 모음에 이 단추를 추가합니다.


| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.openinframebuttonshow` | 부울 \(true/false\). **FrameMaker에서 열기** 단추를 표시하려면 이 속성을 true로 설정하십시오. <br> **기본값**: false |



버전 2409 및 FrameMaker 2022의 9월 릴리스 - 업데이트 3을 사용하는 경우 사용자가 Experience Manager Guides 서버 세부 사항을 FrameMaker에 전달할 수 있도록 **FrameMaker 버전 2022 업데이트 3 이상** 구성을 활성화해야 합니다.  기본적으로 비활성화되어 있습니다.


| PID | 속성 키 | 속성 값 |
|---|------------|--------------|
| `com.adobe.fmdita.xmleditor.config.XmlEditorConfig` | `xmleditor.openinframe2022above` | 부울 \(true/false\). FrameMaker 2022년 9월 릴리스 - 업데이트 3 을 사용하는 경우 이 속성을 true로 설정합니다. <br> **기본값**: false |



*openinframebuttonshow* 속성을 true로 설정하면 AEM 저장소에서 DITA 파일을 선택할 때 **FrameMaker에서 열기** 단추가 표시됩니다. 이 속성이 *true*(으)로 설정되지 않은 경우 **FrameMaker에서 열기** 단추는 리포지토리에서 .fm 또는 .book 파일을 선택한 경우에만 표시됩니다.



