---
title: 문서 기반 게시용 패키지 설치
description: 문서 기반 게시용 패키지를 설치하는 방법 알아보기
exl-id: d83fc1a9-0822-47f0-8099-22a74b9ced2a
feature: Web Editor Configuration
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '348'
ht-degree: 0%

---

# 문서 기반 게시용 패키지 설치 {#id21BNL02052Z}

AEM Guides은 웹 편집기와 통합된 강력한 문서 기반 게시 기능을 제공합니다. 이 기능을 사용하면 하나 이상의 주제를 동시에 게시할 수 있습니다. 맵 편집기에서 맵을 열면 출력 탭으로 이동하여 사전 설정을 만든 다음 하나 이상의 주제를 선택하여 출력을 생성할 수 있습니다. 문서 기반 게시 기능을 사용하여 하나 이상의 주제의 출력을 점진적으로 생성하거나 컨텐츠를 문서 단위 방식으로 기술 자료 플랫폼에 게시할 수 있습니다. 자세한 내용은 사용 안내서의 *웹 편집기 섹션에서 문서 기반 게시*&#x200B;를 참조하십시오.

문서 기반 출력을 게시하기 위한 AEM 사이트를 만들려면 다음 단계를 수행하십시오.

1. [소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/general.html)에서 **Cloud ServiceAdobe 을 위한 XML Documentation 구성 요소 콘텐츠 패키지**&#x200B;를 다운로드하십시오.
1. AEM 패키지 관리자를 엽니다. 패키지 관리자에 액세스할 기본 URL은 `https://<hostname>/crx/packmgr/index.jsp`입니다.
1. Cloud Service을 위해 XML Documentation 구성 요소 콘텐츠 패키지를 업로드한 다음 설치합니다.
1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/general.html)에서 `Knowledge-base-template-for-article-based-publishing-for-cloud-service.zip` 파일을 다운로드합니다.
1. 전역 탐색에서 **사이트**&#x200B;를 선택합니다.
1. 사이트 UI의 오른쪽 상단 모서리에서 **만들기** 단추를 클릭합니다.
1. **만들기** 드롭다운에서 **템플릿의 사이트**&#x200B;를 선택합니다.
1. **가져오기** 단추를 클릭한 다음 시스템에 다운로드한 `Knowledge-base-template-for-article-based-publishing-for-cloud-service.zip`을(를) 선택합니다. 사이트 템플릿을 가져오면 맨 아래에 나열됩니다.

   >[!NOTE]
   >
   > ZIP 파일은 처음에만 가져오면 됩니다. 가져온 사이트 템플릿은 목록에서 사용할 수 있습니다.

   문서 기반 게시를 위한 **기술 자료 서식 파일**&#x200B;을(를) 선택하여 AEM 사이트를 만들고 오른쪽 상단의 **다음**&#x200B;을(를) 클릭합니다.

1. **사이트 제목** 및 **사이트 이름**&#x200B;을 입력하고 오른쪽 상단의 **만들기**&#x200B;를 클릭합니다. AEM 사이트는 Target 사이트 템플릿을 사용하여 만들어집니다. \(Tragopan 사이트는 카테고리, 섹션 및 문서 페이지에 대한 템플릿이 있는 샘플 기술 자료 AEM 사이트입니다.\)

   >[!NOTE]
   >
   > 동일한 템플릿을 사용하여 여러 AEM 사이트를 만들 수 있습니다.


AEM 사이트를 사용하여 웹 편집기의 출력 사전 설정을 사용하여 문서를 게시할 수 있습니다.

**상위 항목:**&#x200B;[&#x200B;웹 편집기 사용자 지정](conf-web-editor.md)
