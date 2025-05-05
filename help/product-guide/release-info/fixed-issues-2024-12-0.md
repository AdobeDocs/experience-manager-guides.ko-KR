---
title: 릴리스 정보 | Adobe Experience Manager Guides 2024.12.0 릴리스의 문제가 해결되었습니다.
description: Adobe Experience Manager Guides as a Cloud Service 2024.1.0 릴리스의 버그 수정에 대해 알아봅니다.
exl-id: 04a57e1a-6e74-46f6-acde-5045d3dcacdc
source-git-commit: dd404c42863f0b4a5f31b54f770c0bf296d68ab9
workflow-type: tm+mt
source-wordcount: '408'
ht-degree: 1%

---

# 2024.12.0 릴리스의 문제가 해결되었습니다.

이 문서에서는 Adobe Experience Manager Guides as a Cloud Service 의 2024.12.0 릴리스의 다양한 영역에서 수정된 버그를 다룹니다.

[2024.12.0 릴리스의 업그레이드 지침](./upgrade-instructions-2024-12-0.md)에 대해 알아봅니다.

## 작성

- `XMLEditorConfig`에서 `xmleditor.uniquefilenames`을(를) 사용하도록 설정한 경우 UUID 인스턴스에 대한 DITA 맵 만들기가 실패합니다. (21201)
- 파일을 닫을 때 **변경 내용 저장 및 파일 잠금 해제** 대화 상자에 추가된 주석 및 레이블이 새 버전의 버전 내역에 저장되지 않습니다. 이는 `XMLEditorConfig`에서 **Close에 체크 인 요청** 또는 **Close에 새 버전 요청**&#x200B;을 사용하도록 설정한 사용 사례와 관련이 있습니다. (20065)
- **완료**(으)로 표시된 문서 상태가 새 버전을 저장하기 전에 **초안**(으)로 되돌려져 문서 버전에서 **완료** 상태가 지속되지 않습니다. (20006)
- 웹 편집기의 항목에 PDF 파일을 이미지 참조로 추가할 수 없습니다. (21206)
- Assets UI에서 DITA 파일을 선택하면 구성에서 비활성화된 경우에도 **FrameMaker에서 열기** 옵션이 표시됩니다. (20082)

## 게시

- 기본 PDF 출력의 TOC에서 챕터 제목이 누락되어 잘못된 계층 구조가 발생합니다. (21840)


## 관리

- 로그에서 **닫히지 않은 ResourceResolver** 오류로 인해 리소스 누수가 발생합니다. (18488)
- 새 기준선이나 중복 기준선을 만들 때 임의의 순서로 레이블이 표시됩니다. (19307)


## 베이스라인

- 기준선에 많은 항목 또는 맵이 있는 경우 1분 후 클라우드 설정 시간 초과에서 기준선을 편집한 다음 저장합니다. (19558)

## 번역

- 기준선을 사용한 맵 변환은 느려지고 결국 연결된 모든 주제 및 맵 파일 목록을 로드하지 못합니다. (19733)

## 해결 방법에 대한 알려진 문제

Adobe은 Adobe Experience Manager Guidesas a Cloud Service 의 2024.12.0 릴리스에서 다음과 같은 알려진 문제를 확인했습니다.

콘텐츠 번역을 처리하는 동안 **프로젝트 만들기가 실패합니다**

번역을 위해 콘텐츠를 전송하는 동안 프로젝트 만들기가 실패하고 다음 로그 오류가 발생합니다.

번역 프로젝트를 처리하는 동안 `com.adobe.cq.wcm.translation.impl.TranslationPrepareResource` 오류가 발생했습니다.

`com.adobe.cq.projects.api.ProjectException`: 프로젝트를 만들 수 없습니다.

원인: `org.apache.jackrabbit.oak.api.CommitFailedException`: `OakAccess0000`: 액세스가 거부되었습니다.


**해결 방법**: 이 문제를 해결하려면 다음 해결 단계를 수행하십시오.

1. Repoinit 파일을 추가합니다. 파일이 없는 경우 [샘플 repoinit 구성 만들기 단계](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-cloud-questions/repoinit-configuration-for-property-set-on-aem-as-cloud-service/m-p/438854?profile.language=ko)를 수행하여 파일을 만드십시오.
2. 파일에 다음 줄을 추가하고 코드를 배포합니다.

   ```
   { "scripts": [ "set principal ACL for translation-job-service\n allow jcr:all on /home/users/system/cq:services/internal/translation\nend" ] }
   ```

3. 배포 후 번역을 테스트합니다.

