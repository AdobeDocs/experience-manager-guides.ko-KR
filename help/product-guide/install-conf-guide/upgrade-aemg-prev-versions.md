---
title: Adobe Experience Manager Guides On Premise 이전 버전 업그레이드
description: Adobe Experience Manager Guides 업그레이드 방법 알아보기
feature: Installation
role: Admin
level: Experienced
source-git-commit: 6f3f05419f4f5cdd45ab580cdee6fa869f20f01d
workflow-type: tm+mt
source-wordcount: '3159'
ht-degree: 0%

---

# Adobe Experience Manager Guides On Premise 업그레이드(버전 4.4.0 및 이전)

이 문서에서는 **Adobe Experience Manager Guides** 버전을 **4.6.0** 이전 버전(**4.4.0**&#x200B;까지)으로 업그레이드하는 지침을 제공합니다.

**3.8.5** 이전 버전을 사용하는 경우 **Experience Manager Guides 도움말 PDF 보관**&#x200B;에 있는 제품별 설치 안내서의 [Adobe Experience Manager Guides 업그레이드](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html) 섹션을 참조하십시오.

최신 릴리스에 대한 업그레이드 지침은 [버전 4.6.0 이상의 Adobe Experience Manager Guides 업그레이드](./upgrade-aemg-latest-version.md)를 참조하십시오.

## 시작하기에 앞서

>[!NOTE]
>
> Experience Manager Guides 버전을 업그레이드하기 전에 사용 허가된 제품 버전에 대한 지침을 업그레이드하고 AEM 서비스 팩을 설치해야 합니다.

>[!IMPORTANT]
>
> 업그레이드를 시작하기 전에 **전체 시스템 백업**&#x200B;을 수행하여 데이터 손실을 방지하십시오.

## 이 문서에서 다루는 업그레이드 경로

이 문서에는 다음 절차에 대한 내용이 포함됩니다.

- [버전 4.4.0으로 업그레이드](#upgrade-to-version-440)
- [버전 4.3.1.5(으)로 업그레이드](#upgrade-to-version-4315)
- [버전 4.3.1로 업그레이드](#upgrade-to-version-431)
- [버전 4.3.0으로 업그레이드](#upgrade-to-version-430)
- [버전 4.2.1로 업그레이드](#upgrade-to-version-421)
- [버전 4.2로 업그레이드](#upgrade-to-version-42)
- [3.8.5에서 버전 4.0으로 업그레이드](#upgrade-from-version-385-to-version-40)


## 글로벌 사전 요구 사항(절차에 따라 다르지 않은 경우 모든 업그레이드에 적용)

업그레이드 프로세스를 실행하기 전에 다음 작업을 완료하십시오.

1. 검토를 위해 열려 있는 주제에 검토 설명을 가져옵니다.
2. 모든 활성 검토를 닫습니다.
3. 모든 번역 작업을 닫습니다.
4. 이전 버전(주요 또는 패치 릴리스) 위에 설치된 Experience Manager Guides 핫픽스를 모두 제거합니다.

일부 업그레이드에서는 번역 업그레이드 클래스에 대해 로그 수준을 `INFO`(으)로 설정하고 별도의 파일에 로그인해야 합니다. 이러한 요구 사항은 관련 업그레이드 절차에서 호출됩니다.

## 버전 3.8.5에서 버전 4.0으로 업그레이드

>[!NOTE]
>
> 이 업그레이드 프로세스는 **3.8.5**&#x200B;에서 **4.0**(으)로 **전용**&#x200B;에 적용됩니다. **3.4 이상**&#x200B;에서 **3.8.5**(으)로 업그레이드하는 경우 [Adobe Experience Manager Guides 도움말 PDF 보관](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html)에 있는 제품별 설치 안내서를 참조하세요.

Experience Manager Guides 버전 **3.8.5**&#x200B;을(를) 사용하는 경우 이전 버전을 제거하지 않고 버전 **4.0**(으)로 업그레이드할 수 있습니다.

### 버전 4.0을 설치하기 전에

1. Experience Manager Guides이 버전 **3.8.5**&#x200B;에 있는지 확인하십시오.
2. 업그레이드 스크립트 패키지 다운로드: Adobe 소프트웨어 배포 포털(다운로드: **)에서**&quot;XML Documentation 솔루션 4.0 업그레이드 패키지&quot;`.zip`를 검색합니다.
3. **패키지 관리자**&#x200B;를 통해 패키지를 AEM에 업로드하고 설치하십시오.
4. 업그레이드 패키지가 설치되면 아래에 설명된 순서대로 스크립트를 실행합니다.

**업그레이드 호환성 API 확인**

이 API는 현재 시스템 상태를 평가하고 업그레이드가 가능한지 여부를 보고하도록 설계되었습니다. 이 스크립트를 실행하려면 아래의 특정 끝점을 트리거합니다.

| 끝점 | /bin/dxml/upgrade/3xto4x/report |
| --- | --- |
| 요청 유형 | **GET** <br> **참고**: 관리자로 AEM 인스턴스에 로그인한 웹 브라우저를 사용할 수 있습니다. |
| 예상 응답 | -   모든 필수 노드를 이동할 수 있는 경우 합격 검사를 받게 됩니다. <br>-   대상 위치에 노드가 있는 경우 관련 오류가 발생합니다. 저장소 \(노드 /var/dxml\ 삭제)를 정리하고 업그레이드 패키지를 다시 설치한 다음 이 끝점을 다시 트리거합니다. <br>**참고:** 대상 위치가 3.x Experience Manager Guides에서 이전에 사용되지 않으므로 일반적인 오류가 아닙니다. <br> -   이 스크립트가 성공하지 못할 경우 진행하지 말고 고객 성공 팀에 보고하십시오. |

**시스템 데이터 마이그레이션 API**

이 API는 **마이그레이션 매핑** 섹션에 언급된 대로 시스템 데이터를 마이그레이션하도록 설계되었습니다.

1. 업그레이드 호환성 확인 API에 실패한 경우 이 스크립트를 실행하지 마십시오\(계속 진행하지 마십시오\).
1. 업그레이드 호환성 확인 API가 성공을 반환하면 업그레이드 스크립트를 실행할 수 있습니다.

| 끝점 | /bin/dxml/upgrade/3xto4x |
| --- | --- |
| 요청 유형 | **POST** <br>**참고**: 이 스크립트는 POST 요청이므로 Postman과 같은 에이전트를 통해 실행해야 합니다. |
| 예상 응답 | -   마이그레이션이 성공하면 XML Documentation 솔루션 버전 4.0.<br>-   오류가 있는 경우 마지막 체크포인트로 복구하고 API 출력과 함께 오류 로그를 고객 성공 팀과 공유합니다. |


**마이그레이션 매핑**

이 API는 소스 위치 아래의 모든 데이터를 타겟 위치로 마이그레이션합니다.

| 소스 | 대상 |
|------|------|
| /content/fmdita | /var/dxml |
| /content/dxml | /var/dxml |
| /etc/fmdita | /libs/fmdita |

### 버전 4.0 설치

1. 업그레이드 단계가 성공한 경우에만 버전 4.0을 설치합니다.
1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 4.0 버전 패키지 다운로드:

   - UUID 버전의 소프트웨어를 사용하는 경우 &quot;4.0 UUID Release for XML Documentation solution for AEM 6.5&quot;를 검색합니다.
   - 비 UUID 버전의 소프트웨어를 사용하는 경우 &quot;4.0 Non-UUID Release for XML Documentation solution for AEM 6.5&quot;를 검색합니다.
CRX 패키지 관리자를 사용하여 기존 AEM 서버 인스턴스에 패키지를 업로드하고 설치합니다.

     >[!NOTE]
     >
     > 모든 시스템 구성 요소가 시작될 때까지 기다립니다.

1. 패키지를 설치한 후 브라우저 캐시를 지웁니다.
1. Dispatcher가 AEM 작성자 인스턴스에 구성된 경우 다음 단계를 수행하십시오.
   - Dispatcher 규칙에서 다음 사항이 처리되는지 확인합니다.
   - URL 패턴 /home/users/\*/preferences가 허용 목록에 추가되었습니다.
   - URL 패턴 /libs/cq/security/userinfo.json 이 캐시되지 않습니다.
1. Dispatcher 캐시 \(캐시된 `clientlibs`을(를) 지웁니다\.

## 버전 4.2로 업그레이드

버전 **4.0**, **4.1** 또는 **4.1.x**&#x200B;을(를) 사용하는 경우 버전 **4.2**(으)로 바로 업그레이드할 수 있습니다.

### 버전 4.2를 설치하기 전에

Experience Manager Guides 4.2 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides **4.0**, **4.1** 또는 **4.1.x**(으)로 업그레이드되었습니다.
2. 모든 번역 작업을 마감했습니다.
3. `INFO`에 대해 로그 수준을 `com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 설정하고 새 로그 파일(예: `logs/translation_upgrade.log`)로 로그인합니다.

   >[!NOTE]
   > 
   > 모든 활성 리뷰를 닫아야 합니다. 4.2로 업그레이드하는 동안 검토가 닫히지 않으면 진행 중인 이전 검토 작업에서 이전 검토 페이지를 계속 열 수 있습니다. 업그레이드 후 생성된 새 검토 작업에는 최신 기능 업데이트가 표시됩니다.

### 버전 4.2 설치

1. **Adobe 소프트웨어 배포 포털**&#x200B;에서 [4.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) 패키지를 다운로드합니다.
2. 4.2 패키지를 설치합니다.
3. 설치 후 로그에서 다음 메시지를 기다립니다.

   `Completed the post deployment setup script`

   위의 메시지는 모든 설치 단계가 완료되었음을 나타냅니다.

   다음 오류가 발생하는 경우 고객 성공 팀에 보고하십시오.

   - `Error in post deployment setup script`
   - `Exception while porting the translation MAP`
   - `Unable to port translation map from v1 to v2 for property`

4. (선택 사항) 버전 4.2와 함께 릴리스된 Oxygen 커넥터 플러그인을 업그레이드하십시오.
5. 패키지를 설치한 후 브라우저 캐시를 지웁니다.
6. 다음 섹션에 자세히 설명된 대로 맞춤화를 계속 업그레이드하십시오.

### 버전 4.2 설치 후

>[!IMPORTANT]
>
> 업그레이드된 서버에 하이 테크 템플릿이 표시되지 않습니다. 서버에 하이테크 템플릿을 포함하려면 다음을 복사할 수 있습니다. Source: `/libs/fmdita/pdf/Hi-Tech` 대상: `/content/dam/dita-templates/pdf`.

그런 다음 [일반적인 업그레이드 후 작업(모든 버전)](#common-postupgrade-tasks-all-versions)에서 공유된 업그레이드 후 작업을 계속 진행합니다.

## 버전 4.2.1로 업그레이드

>[!TIP]
>
> **4.2.14.2.1.3** 버전 위에 **핫픽스**&#x200B;을(를) 설치하는 것이 좋습니다.

**4.1**, **4.1.x** 또는 **4.2**&#x200B;을(를) 사용하는 경우 **4.2.1** 버전으로 바로 업그레이드할 수 있습니다.

>[!NOTE]
>
> 사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드를 시작합니다.

### 버전 4.2.1을 설치하기 전에

1. Experience Manager Guides **4.1**, **4.1.x** 또는 **4.2**(으)로 업그레이드하십시오.
2. 모든 번역 작업을 닫습니다.
3. `INFO`에 대해 로그 수준을 `com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 설정하고 새 파일(예: `logs/translation_upgrade.log`)로 로그인합니다.

>[!NOTE]
>
> 모든 활성 리뷰를 닫아야 합니다(4.2와 동일한 동작).

### 버전 4.2.1 설치

1. **Adobe 소프트웨어 배포 포털**&#x200B;에서 [4.2.1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) 패키지를 다운로드합니다.
2. 4.2.1 패키지를 설치합니다.
3. 필요한 경우 번역 맵 업그레이드 작업을 트리거합니다. 자세한 내용은 [서블릿을 통해 스크립트 트리거 사용](#enable-trigger-of-script-via-a-servlet)을 참조하십시오.

4. 설치 후 로그에서 `Completed the post deployment setup script`을(를) 기다립니다.

   다음 오류를 고객 성공에 보고하십시오.

   - `Error in post deployment setup script`
   - `Exception while porting the translation MAP`
   - `Unable to port translation map from v1 to v2 for property`
5. (선택 사항) 버전 **4.2**&#x200B;과(와) 함께 릴리스된 Oxygen 커넥터 플러그인 업그레이드
6. 브라우저 캐시를 지웁니다.
7. [일반적인 업그레이드 후 작업(모든 버전)](#common-postupgrade-tasks-all-versions)을 계속합니다.

### 버전 4.2.1 설치 후

>[!IMPORTANT]
>
> 업그레이드된 서버에 하이 테크 템플릿이 표시되지 않습니다. 서버에 하이테크 템플릿을 포함하려면 다음을 복사할 수 있습니다. Source: `/libs/fmdita/pdf/Hi-Tech` 대상: `/content/dam/dita-templates/pdf`.

[일반적인 업그레이드 후 작업(모든 버전)](#common-postupgrade-tasks-all-versions)을 계속 진행하고 필요한 경우 [맵 찾기 및 바꾸기를 위해 기존 콘텐츠를 색인화](#index-existing-content-for-map-find-and-replace)합니다.


## 버전 4.3.0으로 업그레이드

버전 4.3.0으로 업그레이드하는 방법은 현재 버전의 Experience Manager Guides에 따라 다릅니다. 버전 4.2 또는 4.2.x를 사용 중인 경우 버전 4.3.0으로 바로 업그레이드할 수 있습니다.

>[!NOTE]
>
>사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

### 버전 4.3.0을 설치하기 전에

Experience Manager Guides 4.3.0 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.2 또는 4.2.x로 업그레이드하고 해당 설치 단계를 완료했습니다.
1. 모든 번역 작업을 마감했습니다.

### 버전 4.3.0 설치

1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 4.3.0 버전 패키지를 다운로드합니다.
1. 버전 4.3.0 패키지를 설치합니다.
1. 패키지를 설치한 후 브라우저 캐시를 지웁니다.
1. 폴더 프로필의 `ui_config.json`XML 편집기 구성&#x200B;**탭에서** 파일을 업그레이드합니다.

### 버전 4.3.0 설치 후

다음 단계를 진행합니다.

- [일반적인 업그레이드 후 작업(모든 버전)](#common-postupgrade-tasks-all-versions)
- 해당하는 경우: [끊어진 링크 보고서에 대한 기존 콘텐츠 게시 프로세스](#post-process-existing-content-for-broken-link-report)

## 버전 4.3.1로 업그레이드

버전 4.3.1로 업그레이드하는 방법은 현재 버전의 Experience Manager Guides에 따라 다릅니다. 버전 4.3.0, 4.2 또는 4.2.1을 사용 중인 경우 버전 4.3.1로 바로 업그레이드할 수 있습니다.

>[!NOTE]
>
>사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

### 버전 4.3.1을 설치하기 전에

Experience Manager Guides 4.3.1 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.3.0, 4.2 또는 4.2.1로 업그레이드하고 해당 설치 단계를 완료했습니다.
1. (선택 사항) 모든 번역 작업을 마감했습니다.
1. **클래스의 로그 수준을** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 변경하고 이 로그를 새 로그 파일(예: `logs/translation_upgrade.log`)에 추가했습니다.

### 버전 4.3.1 설치

1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 4.3.1 버전 패키지를 다운로드합니다.
1. 버전 4.3.1 패키지를 설치합니다.
1. 필요한 경우 번역 맵 업그레이드 작업을 트리거합니다. 자세한 내용은 [서블릿을 통해 스크립트 트리거 사용](#enable-trigger-of-script-via-a-servlet)을 참조하십시오.
1. 설치 후 로그에서 `Completed the post deployment setup script`을(를) 기다립니다.
다음 오류를 고객 성공에 보고하십시오.\
   `Error in post deployment setup script`, `Exception while porting the translation MAP`, `Unable to port translation map from v1 to v2 for property`
1. (선택 사항) 버전 **4.2**&#x200B;과(와) 함께 릴리스된 Oxygen 커넥터 플러그인을 업그레이드하십시오.
1. 브라우저 캐시를 지웁니다.

### 버전 4.3.1 설치 후

다음 단계를 진행합니다.

- [일반적인 업그레이드 후 작업(모든 버전)](#common-postupgrade-tasks-all-versions)
- 해당하는 경우: [맵 찾기 및 바꾸기에 대한 기존 콘텐츠 색인화](#index-existing-content-for-map-find-and-replace)
- 해당하는 경우: [끊어진 링크 보고서에 대한 기존 콘텐츠 게시 프로세스](#post-process-existing-content-for-broken-link-report)


## 버전 4.3.1.5(으)로 업그레이드

**4.3.1.5** 4.3.1 **버전을 사용하는 경우**(으)로 바로 업그레이드할 수 있습니다.

### 버전 4.3.1.5 설치

1. **4.3.1.5** Adobe 소프트웨어 배포 포털[에서 ](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) 패키지를 다운로드합니다.
2. 4.3.1.5 패키지를 설치합니다.
3. 설치 프로세스가 완료될 때까지 기다립니다.
4. 다음 섹션에 자세히 설명된 대로 맞춤화를 계속 업그레이드하십시오.

## 4.3.1.5 버전을 설치한 후

>[!NOTE]
>
>org.apache.velocity 번들을 사용하려면 번들을 업로드하기 전에 다음 단계를 수행하십시오.
> 1. `<server>:<port>/system/console/bundles`(으)로 이동
> 1. org.apache.velocity를 검색합니다.
> 1. 검색된 번들을 제거합니다.
> 1. 필요한 속도 번들을 설치합니다.

1. 업그레이드가 완료되면 사용자 지정/오버레이가 새 애플리케이션 코드와 일치하도록 확인 및 업데이트되었는지 확인합니다. 다음은 몇 가지 예입니다.
   - `/libs/fmdita` 또는 ` /libs`에서 오버레이된 모든 구성 요소는 새 제품 코드와 비교해야 하며 `/apps`의 오버레이된 파일에서 업데이트를 수행해야 합니다.
   - 제품에서 사용되는 모든 clientlib 카테고리는 변경 사항을 검토해야 합니다. 최신 기능을 가져오려면 재정의된 모든 구성 \(아래 예제\)을 최신 구성과 비교해야 합니다.
   - `elementmapping.xml`
   - `ui\_config.json\`(폴더 프로필에 설정되었을 수 있음\)
   - 수정된 `com.adobe.fmdita.config.ConfigManager`


## 버전 4.4.0으로 업그레이드

**4.3.1**, **4.3.0**, **4.2** 또는 **4.2.1(핫픽스**)**을(를) 사용하는 경우 4.2.1.34.4.0**(으)로 바로 업그레이드할 수 있습니다.

>[!NOTE]
>
>사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

### 버전 4.4.0을 설치하기 전에

Experience Manager Guides 4.4.0 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.3.1, 4.3.0 또는 4.2.1(핫픽스 4.2.1.3)로 업그레이드하고 해당 설치 단계를 완료했습니다.
1. (선택 사항) 모든 번역 작업을 마감했습니다.
1. **클래스의 로그 수준을** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 변경하고 이 로그를 새 로그 파일(예: `logs/translation_upgrade.log`)에 추가했습니다.

### 버전 4.4.0 설치

1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 4.4.0 버전 패키지를 다운로드합니다.
2. 4.4.0 패키지를 설치합니다.
3. 필요한 경우 번역 맵 업그레이드 작업을 트리거합니다. 자세한 내용은 [서블릿을 통해 스크립트 트리거 사용](#enable-trigger-of-script-via-a-servlet)을 참조하십시오.
4. 패키지 설치를 완료한 후 로그에서 다음 메시지를 기다립니다.

   `Completed the post deployment setup script`

   위의 메시지는 설치 단계가 모두 완료되었음을 나타냅니다.

   다음 오류 접두사가 발생하면 고객 성공 팀에 보고하십시오.

   - `Error in post deployment setup script`
   - `Exception while porting the translation MAP`
   - `Unable to port translation map from v1 to v2 for property`
5. (선택 사항) 버전 **4.4.0**&#x200B;과(와) 함께 릴리스된 Oxygen 커넥터 플러그인을 업그레이드하십시오.
6. 브라우저 캐시를 지웁니다.
7. 다음 작업을 사용하여 계속:

   - [일반적인 업그레이드 후 작업(모든 버전)](#common-ppostupgrade-tasks-all-versions)
   - [맵 찾기 및 바꾸기에 대한 기존 콘텐츠 색인화](#index-existing-content-for-map-find-and-replace)(해당되는 경우에만)
   - [끊어진 링크 보고서에 대한 기존 콘텐츠 사후 처리](#post-process-existing-content-for-broken-link-report)(해당하는 경우에만)
   - [번역 맵 업그레이드(서블릿 트리거)](#translation-map-upgrade-servlet-trigger)(해당되는 경우에만)


## 일반적인 업그레이드 후 작업(모든 버전)

Experience Manager Guides을 설치한 후 새로 설치한 버전에서 설정에 적용할 수 있는 구성을 병합해야 할 수 있습니다.

>[!NOTE]
>
> **DAM 자산 업데이트** 워크플로 모델을 사용자 지정할 수 있습니다. 맞춤화가 있는 경우 모델의 작업 복사본에서 맞춤화를 Experience Manager Guides 변경 사항과 동기화합니다.

### DAM 자산 업데이트 워크플로우 유효성 검사(변경 후 처리)

1. AEM 워크플로 모델 UI(예: 소스에 표시)를 엽니다.\
   `http://<host>:4502/libs/cq/workflow/admin/console/content/models.html`
2. **DAM 자산 업데이트 워크플로우**&#x200B;를 선택합니다.
3. **편집**&#x200B;을 선택합니다.
4. **DXML 사후 프로세스 개시자** 구성 요소가 있는 경우 사용자 지정이 동기화되었는지 확인하십시오.
5. 구성 요소가 없으면 다음 내용을 삽입합니다.
   1. **구성 요소 삽입**&#x200B;을 클릭합니다(마지막 단계로 안내서 후처리).
   2. **프로세스 단계**를 구성합니다.
      **공통 탭**
- 제목: `DXML Post Process Initiator`
- 설명: `DXML post process initiator step which will trigger a sling job for DXML post-processing of the modified/created asset`
      **프로세스 탭**
- 프로세스: `DXML Post Process Initiator` 선택
- `Handler Advance` 선택
- `Done` 선택
   3. 변경 내용을 완료한 후 오른쪽 상단의 **동기화**&#x200B;를 클릭합니다. 성공 알림을 받게 됩니다.

>[!NOTE]
>
> 새로 고침하여 맞춤화된 변경 사항 및 Experience Manager Guides 후 처리 단계가 최종 워크플로우 모델에 있는지 확인합니다.

### 런처 구성 유효성 검사

1. AEM 워크플로 인터페이스로 이동하여 **런처**&#x200B;를 엽니다.

```http
    http://localhost:4502/libs/cq/workflow/content/console.html
```

1. **DAM 자산 업데이트 워크플로우**&#x200B;에 해당하는 \(필요한 경우\) 다음 두 개의 런처 \(활성 상태여야 함\)를 찾아 변경합니다.

1. *DAM 자산 업데이트 워크플로우*&#x200B;에 대한 &quot;**노드가 생성됨**&quot;의 런처- `"jcr:content/jcr:mimeType!=video"` 조건의 경우 &#39;Globbing&#39; 값은 다음과 같아야 합니다.

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - `excludeList`에 `"event-user-data:changedByWorkflowProcess"`이(가) 있어야 합니다.
   - 조건 &quot;*&quot;에 대한* DAM 자산 업데이트 워크플로 -**의**&#x200B;노드가 수정됨`jcr:content/jcr:mimeType!=video`에 대한 런처, &#39;Globbing&#39; 값은 다음과 같아야 합니다.

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - `excludeList`에 `"event-user-data:changedByWorkflowProcess"`이(가) 있어야 합니다.

### 오버레이 및 사용자 정의 유효성 검사

업그레이드가 완료된 후:

1. 업그레이드가 완료되면 사용자 지정/오버레이가 새 애플리케이션 코드와 일치하도록 확인 및 업데이트되었는지 확인합니다. 다음은 몇 가지 예입니다.
   - /libs/fmditaor/libsfrom에서 오버레이된 모든 구성 요소는 새 제품 코드와 비교해야 하며, 업데이트는 / 앱에서 오버레이된 파일에서 수행해야 합니다.
   - 제품에서 사용되는 모든 clientlib 카테고리는 변경 사항을 검토해야 합니다. 최신 기능을 가져오려면 재정의된 모든 구성 \(아래 예제\)을 최신 구성과 비교해야 합니다.
   - elementmapping.xml
   - ui\_config.json\(폴더 프로필에 설정되었을 수 있음\)
   - 수정된 `com.adobe.fmdita.config.ConfigManager`

1. damAssetLucene에서 사용자 지정을 추가한 경우 다시 적용해야 할 수 있습니다. 이러한 변경 내용을 적용한 후 reindex를 true로 설정합니다. 이렇게 하면 기존 노드를 맞춤화로 다시 색인화하게 됩니다. 완료되면 색인 재지정 플래그가 다시 false로 설정됩니다. 시스템의 에셋 수에 따라 몇 시간 정도 소요될 수 있습니다.

## 맵 찾기 및 바꾸기에 대한 기존 콘텐츠 색인화

이 섹션에서는 새로운 **맵 수준 찾기 및 바꾸기** 기능을 활성화하는 데 사용되는 반복되는 **인덱싱** 절차를 통합합니다.

**인덱싱을 건너뛸 수 있는 경우**

소스에는 업그레이드 경로에 따라 &quot;건너뛰기&quot; 메모가 포함됩니다(예: &quot;4.3.0 또는 4.3.1에서 업그레이드하는 경우 이러한 단계를 수행할 필요가 없습니다.&quot; 및 이와 유사한 메모). 업그레이드 섹션에 설명된 건너뛰기 메모를 따릅니다.

기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 맵 수준에서 새 찾기 및 바꾸기 텍스트를 사용합니다.

1. POST 요청 실행(인증 포함):

```http
POST http://<server:port>/bin/guides/map-find/indexing
```

소스에서 지원되는 선택적 매개 변수:

- 특정 맵 경로 색인화(기본적으로 모든 맵이 색인화됨):

  ```http
  POST http://<server:port>/bin/guides/map-find/indexing?paths=<map_path_in_repository>
  ```

- 루트 폴더(및 그 하위 폴더) 아래의 DITA 맵 색인화:

  ```http
  POST http://<server:port>/bin/guides/map-find/indexing?root=/content/dam/test
  ```

  >[!NOTE]
  >
  > `paths`과(와) `root`이(가) 모두 전달되면 `paths`만 고려됩니다.

1. API가 `jobId`을(를) 반환합니다. 상태를 확인하려면 GET 요청을 보냅니다.

   ```http
   GET http://<server:port>/bin/guides/map-find/indexing?jobId={jobId}
   ```

   예상 완료 동작:

   - 완료 시 GET은 성공으로 응답하고 맵이 실패했는지 여부를 나타냅니다.
   - 서버 로그에서 성공적으로 인덱싱된 맵을 확인합니다.

### damAssetLucene 인덱싱이 완료되었는지 확인(해당하는 경우)

데이터 크기에 따라 damAssetLucene 인덱싱이 몇 시간 정도 소요될 수 있으며, `reindex`이(가) `false`일 때 완료를 확인할 수 있습니다.

`http://<server:port>/oak:index/damAssetLucene`

`damAssetLucene`에 사용자 지정을 추가한 경우 색인 재지정이 완료된 후 다시 적용해야 할 수 있습니다.

### &quot;100000개 이상의 노드를 읽거나 트래버스한 쿼리&quot;에 대한 해결 방법(작업이 실패한 경우)

인덱싱 작업이 실패하고 오류가 표시되는 경우:

&quot;쿼리가 100000개 이상의 노드를 읽거나 트래버스했습니다. 다른 작업에 영향을 주지 않도록 처리가 중지되었습니다.&quot;

소스에서 이 해결 방법을 시도해 보십시오.

1. `damAssetLucene` oak 인덱스에서 `indexNodeName=true`에 부울 속성 `/oak:index/damAssetLucene/indexRules/dam:Asset`을(를) 추가합니다.
2. `excerpt` 아래에 이름이 `/oak:index/damAssetLucene/indexRules/dam:Asset/properties`인 새 노드를 추가하고 소스에 표시된 대로 속성을 설정합니다.
   - `name=rep:excerpt`
   - `propertyIndex=true`
   - `notNullCheckEnabled=true`
3. `damAssetLucene`을(를) 설정하여 `reindex=true`을(를) 다시 인덱싱하고 `false`이(가) 될 때까지 기다립니다(몇 시간 정도 걸릴 수 있음).
4. 인덱싱 스크립트를 다시 실행합니다(POST 및 작업 추적 반복).

## 끊어진 링크 보고서에 대한 기존 콘텐츠 사후 처리

이 섹션에서는 **끊어진 링크 보고서**&#x200B;를 활성화하는 데 사용되는 반복되는 **사후 처리** 절차를 통합합니다.

**사후 처리를 건너뛸 수 있는 경우**

소스에는 업그레이드 경로에 따라 &quot;건너뛰기&quot; 메모가 포함됩니다(예: &quot;4.3.0에서 업그레이드하는 경우 이러한 단계를 수행할 필요가 없음&quot; 또는 &quot;4.3.0 또는 4.3.1에서 업그레이드하는 경우&quot;). 업그레이드 섹션에 설명된 건너뛰기 메모를 따릅니다.

끊어진 링크 보고서를 활성화하려면 다음 단계를 수행하십시오.

1. (선택 사항) 큰 저장소에 대해 Oak queryLimitReads를 늘립니다

   **100,000개 이상의 DITA 파일**&#x200B;이 있는 경우 `queryLimitReads`의 `org.apache.jackrabbit.oak.query.QueryEngineSettingsService`을(를) 자산 수보다 큰 값으로 업데이트하고(예: `200000`) 다시 배포한 다음 계속하십시오.

   | PID | 속성 키 | 속성 값 |
   |---|---|---|
   | org.apache.jackrabbit.oak.query.QueryEngineSettingsService | queryLimitReads | 값: 200000 <br> 기본값: 100000 |

1. 다음 API를 실행하여 모든 파일에서 후처리를 실행합니다.

   | 끝점 | /bin/guides/reports/upgrade |
   |---|---|
   | 요청 유형 | **POST** 이 스크립트는 POST 요청이므로 Postman과 같은 에이전트를 통해 실행해야 합니다. |
   | 예상 응답 | API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점으로 보낼 수 있습니다.<br> 샘플 URL: `http://<server:port>/bin/guides/reports/upgrade` |

   | 끝점 | /bin/guides/reports/upgrade |
   |---|---|
   | 요청 유형 | **GET** |
   | 매개 변수 | jobId: 이전 post 요청에서 받은 jobId를 전달합니다. |
   | 예상 응답 | - 작업이 완료되면 GET 요청이 성공으로 응답합니다. <br> - 오류가 있는 경우 고객 성공 팀과 API 출력과 함께 오류 로그를 공유합니다.  <br>샘플 URL: `http://<server:port>/bin/guides/reports/upgrade?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678` |

1. 1단계에서 변경한 경우 `queryLimitReads`의 기본 또는 이전 기존 값으로 되돌립니다.

## 서블릿을 통한 스크립트 트리거 활성화

여러 버전에는 서블릿을 통해 번역 맵 업그레이드 작업을 트리거하는 선택적 단계가 포함되어 있습니다. 이 섹션에서는 반복되는 절차를 통합하고 소스에 제공된 모든 세부 정보를 포함합니다.


>[!NOTE]
>
> 4.3.0 또는 4.3.1에서 업그레이드하는 경우 이러한 단계를 수행할 필요가 없습니다.

게시물:

```
http://localhost:4503/bin/guides/script/start?jobType=translation-map-upgrade
```

응답:

```
{
"msg": "Job is successfully submitted and lock node is created for future reference",
"lockNodePath": "/var/dxml/executor-locks/translation-map-upgrade/1683190032886",
"status": "SCHEDULED"
}
```

위의 응답 JSON에서 키 `lockNodePath`은(는) 제출된 작업을 가리키는 리포지토리에 만들어진 노드로의 경로를 보유합니다. 작업이 완료되면 자동으로 삭제되며, 그때까지 이 노드를 참조하여 작업의 현재 상태를 확인할 수 있습니다.

다음 단계로 진행하기 전에 `com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Completed porting of translation map from V1 to V2` 및 `com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Completed the thread to upgrade translation map from V1 to V2`을(를) 찾으십시오.

>[!NOTE]
>
> 노드가 여전히 존재하는지 여부와 작업 상태를 확인해야 합니다.

**GET**: `http://<aem_domain>/var/dxml/executor-locks/translation-map-upgrade/1683190032886.json`


### &#39;fmdita 재작성기&#39; 충돌을 처리하는 단계

Experience Manager Guides에는 교차 맵 연결을 위해 생성된 링크를 처리하는 사용자 지정 Sling 재작성기 모듈(`fmditarewriter`)이 포함되어 있습니다.

코드베이스에 다른 사용자 지정 Sling 재작성기가 있는 경우:

- Guides는 `order`을(를) 사용하므로 **값** 50`order=50`보다 큰 값을 사용하십시오.
- 이 업그레이드 중에 `order` 값이 `1000`에서 `50`(으)로 변경되므로 기존 사용자 지정 재작성기(있는 경우)를 `fmditarewriter`과(와) 병합해야 합니다.

