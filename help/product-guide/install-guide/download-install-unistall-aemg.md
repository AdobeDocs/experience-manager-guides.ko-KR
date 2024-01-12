---
title: AEM Guides 제거
description: AEM Guides를 제거하는 방법 알아보기
exl-id: 6c6b9692-cdec-426f-bc3b-f09d0091da39
feature: Installation
role: Admin
level: Experienced
source-git-commit: 0513ecac38840a4cc649758bd1180edff1f8aed1
workflow-type: tm+mt
source-wordcount: '148'
ht-degree: 0%

---

# AEM Guides 제거 {#id21BHG0C0SXA}

CRX 패키지 관리자를 사용하여 AEM Guides를 제거할 수 있습니다. 제거하는 동안 저장소의 내용은 패키지를 설치하기 직전에 만든 스냅샷으로 되돌아갑니다.

AEM Guides를 제거하려면 다음 단계를 수행하십시오.

1. AEM 인스턴스에 로그인하고 CRX 패키지 관리자로 이동합니다. 패키지 관리자에 액세스할 수 있는 기본 URL은 다음과 같습니다.

   ```http
   http://<server name>:<port>/crx/packmgr/index.jsp
   ```

1. com.adobe.fmdita 패키지를 검색합니다.
1. 패키지를 클릭하여 확장합니다.
1. 클릭 **자세히** 드롭다운을 엽니다.
1. 클릭 **제거** 제거가 완료될 때까지 기다립니다.
1. 이 패키지가 더 이상 필요하지 않으면 **삭제** 패키지를 제거한 후

## 제거 후

제거 후 나머지 파일을 정리하려면 다음 단계를 수행하십시오.

1. 다음을 사용하여 스크립트 캐시를 정리합니다.

   ```http
   http://<host>:<port>/system/console/scriptcache
   ```

1. 다음을 사용하여 캐시를 무효화할 수 있습니다.

   ```http
   http://<host>:<port>/libs/granite/ui/content/dumplibs.rebuild.html?back=true
   ```

1. 클릭 **캐시 무효화**.
1. 브라우저의 캐시를 지웁니다.

**상위 항목:**[&#x200B;다운로드 및 설치](download-install.md)
