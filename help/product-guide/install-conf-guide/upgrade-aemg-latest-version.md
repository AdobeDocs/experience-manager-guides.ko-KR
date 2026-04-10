---
title: Adobe Experience Manager Guides 업그레이드
description: Adobe Experience Manager Guides 업그레이드 방법 알아보기
feature: Installation
role: Admin
level: Experienced
source-git-commit: 453da51a42984b912547570f2e1de70806b41171
workflow-type: tm+mt
source-wordcount: '1661'
ht-degree: 0%

---

# 버전 4.6.0 이상의 Adobe Experience Manager Guides 업그레이드

이 문서에서는 4.6.0 이상의 Experience Manager Guides 버전을 업그레이드하는 방법에 대한 지침을 제공합니다.

>[!NOTE]
>
> 사용 허가된 제품 버전에 맞는 업그레이드 지침을 따르십시오.

현재 버전의 Experience Manager Guides을 버전 5.1.0 서비스 팩 3으로 업그레이드할 수 있습니다.

- 버전 5.1.0 또는 5.1.x 를 사용 중인 경우 버전 5.1.0 서비스 팩 3으로 바로 업그레이드할 수 있습니다.
- 버전 4.6.0, 4.6.x, 5.0.0 또는 5.0.x를 사용하는 경우 버전 5.1.0으로 업그레이드해야 합니다.
- 4.6.0 이전 버전을 사용하는 경우 자세한 업그레이드 지침은 [버전 4.4.0 및 이전 버전의 Adobe Experience Manager Guides 업그레이드](./upgrade-aemg-prev-versions.md)를 참조하십시오.

>[!NOTE]
>
> Experience Manager Guides 버전을 업그레이드하기 전에 AEM 서비스 팩을 설치해야 합니다.

자세한 내용은 다음 절차를 참조하십시오.

- [버전 5.1.0으로 업그레이드](#upgrade-to-version-510)
- [버전 5.0.0으로 업그레이드](#upgrade-to-version-500)
- [버전 4.6.0으로 업그레이드](#upgrade-to-version-460)

>[!IMPORTANT]
>
> 업그레이드를 시작하기 전에 전체 시스템 백업을 수행하여 데이터 손실을 방지하십시오.


## 버전 5.1.0으로 업그레이드


>[!IMPORTANT]
>
> 현재 AEM 6.5를 사용 중이며 AEM 6.5 LTS로 이동할 계획이라면 Experience Manager Guides 5.1.0 업그레이드를 진행하기 전에 먼저 AEM 업그레이드를 완료해야 합니다. 자세한 내용은 [Adobe Experience Manager(AEM) 6.5 LTS로 업그레이드](https://experienceleague.adobe.com/ko/docs/experience-manager-65-lts/content/implementing/deploying/upgrading/upgrade)를 참조하십시오.

**사전 요구 사항**

>[!NOTE]
>
>5.1.0 서비스 팩 3으로 업그레이드하는 경우 Experience Manager Guides 버전 5.1.0 또는 5.1.x에 있어야 합니다. 5.1.0 서비스 팩 3 릴리스의 업그레이드 프로세스는 5.1.0 릴리스와 동일한 단계를 따릅니다.

Experience Manager Guides 5.1.0 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.6.3, 4.6.4, 5.0.0 또는 5.0.0 서비스 팩 1로 업그레이드되었습니다.
1. (선택 사항) 모든 번역 작업을 마감했습니다.
1. **클래스의 로그 수준을** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 변경하고 이 로그를 새 로그 파일(예: `logs/translation_upgrade.log`)에 추가했습니다.

>[!NOTE]
>
> 사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

**버전 5.1.0 설치**

[Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 5.1.0 버전 패키지를 다운로드하고 [설치 및 설치 후 업그레이드 워크플로](#installation-and-post-installation-upgrade-workflow)에 제공된 지침에 따라 업그레이드 프로세스를 완료합니다.


## 버전 5.0.0으로 업그레이드

>[!TIP]
>
> 버전 5.0.0 서비스 팩 3으로 업그레이드하는 방법은 현재 버전의 Experience Manager Guides에 따라 다릅니다. 버전 5.0.0 서비스 팩 2, 5.0.0 서비스 팩 1 또는 5.0.0을 사용 중인 경우 버전 5.0.0 서비스 팩 3으로 직접 업그레이드할 수 있습니다. 업그레이드 단계는 버전 5.0.0과 동일합니다.

>[!NOTE]
>
> 사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

**사전 요구 사항**

Experience Manager Guides 5.0.0 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.6.3, 4.6.1, 4.6.0 또는 4.4로 업그레이드되었습니다.
1. (선택 사항) 모든 번역 작업을 마감했습니다.
1. **클래스의 로그 수준을** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 변경하고 이 로그를 새 로그 파일(예: `logs/translation_upgrade.log`)에 추가했습니다.


**버전 5.0.0 설치**

[Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 5.0.0 버전 패키지를 다운로드하고 [설치 및 설치 후 업그레이드 워크플로](#installation-and-post-installation-upgrade-workflow)에 제공된 지침에 따라 업그레이드 프로세스를 완료합니다.

## 버전 4.6.0으로 업그레이드

>[!TIP]
>
> 버전 4.6.0 ,4.6.0 서비스 팩 1 또는 4.6.0 서비스 팩 3 위에 4.6.0 서비스 팩 4 를 설치하는 것이 좋습니다. 4.6.0 서비스 팩 4 릴리스의 업그레이드 프로세스는 4.6.0 릴리스와 동일한 단계를 따릅니다.

버전 4.6.0으로 업그레이드하는 방법은 현재 버전의 Experience Manager Guides에 따라 다릅니다. 버전 4.4.0, 4.3.1, 4.3.0, 4.2 또는 4.2.1(핫픽스 4.2.1.3)을 사용하는 경우 버전 4.6.0으로 바로 업그레이드할 수 있습니다.

>[!NOTE]
>
> 사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

**사전 요구 사항**

Experience Manager Guides 4.6.0 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.3.1, 4.3.0 또는 4.2.1로 업그레이드되었습니다(핫픽스 4.2.1.3).
1. (선택 사항) 모든 번역 작업을 마감했습니다.
1. **클래스의 로그 수준을** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 변경하고 이 로그를 새 로그 파일(예: `logs/translation_upgrade.log`)에 추가했습니다.

**버전 4.6.0 설치**

[Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 4.6.0 버전 패키지를 다운로드하고 [설치 및 설치 후 업그레이드 워크플로](#installation-and-post-installation-upgrade-workflow)에 제공된 지침에 따라 업그레이드 프로세스를 완료합니다.

## 설치 및 설치 후 업그레이드 워크플로

### 버전 패키지 설치

버전 패키지를 설치하려면 다음 단계를 수행하십시오.

1. 업그레이드할 버전 패키지를 설치합니다.
1. 트리거를 눌러 번역 맵 업그레이드 작업을 시작하도록 선택할 수 있습니다. 자세한 내용은 [서블릿을 통해 스크립트 트리거 사용](#enable-trigger-of-script-via-a-servlet)을 참조하십시오.

1. 패키지 설치를 완료한 후 로그에서 다음 메시지를 기다립니다.

   `Completed the post deployment setup script`

   위의 메시지는 설치 단계가 모두 완료되었음을 나타냅니다.

   다음 오류가 발생하는 경우 고객 성공 팀에 보고하십시오.

   - 배포 후 설정 스크립트 오류
   - 번역 맵을 포팅하는 동안 예외 발생
   - v1에서 v2로의 번역 맵을 속성에 대해 포트할 수 없음
1. (선택 사항) 업그레이드 중인 버전과 함께 릴리스된 Oxygen 커넥터 플러그인을 업그레이드하십시오.
1. 패키지를 설치한 후 브라우저 캐시를 지웁니다.

### 설치 후 프로세스

Experience Manager Guides을 설치한 후 새로 설치한 버전에서 설정에 적용할 수 있는 다양한 구성을 병합할 수 있습니다.

>[!NOTE]
>
> dam-update-asset 모델은 맞춤화될 수 있다. 따라서 맞춤화가 수행된 경우 맞춤화와 Experience Manager Guides을 모델의 작업 복사본으로 동기화해야 합니다.

**DAM 자산 업데이트 워크플로우 \(변경 후 처리\):**

1. URL 열기:

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM 자산 업데이트 워크플로우**&#x200B;를 선택합니다.
1. **편집**&#x200B;을 선택합니다.
1. **DXML 사후 프로세스 개시자** 구성 요소가 있는 경우 사용자 지정이 동기화되었는지 확인하십시오.
1. **DXML 사후 프로세스 개시자** 구성 요소가 없으면 다음 단계를 수행하여 해당 구성 요소를 삽입합니다.

   - **구성 요소 삽입** \(프로세스의 마지막 단계로 Experience Manager Guides 후처리를 담당함\)을 선택합니다.
   - 아래 세부 정보로 **프로세스 단계**&#x200B;을(를) 구성하십시오.

     **공통 탭:**

      - **제목:** DXML 사후 프로세스 개시자

      - **설명**: 수정/생성된 에셋의 DXML 사후 처리에 대한 슬링 작업을 트리거하는 DXML 사후 처리 개시자 단계입니다.

     **프로세스 탭**

      - **프로세스** 드롭다운에서 **DXML 사후 프로세스 개시자**&#x200B;를 선택합니다.
      - **핸들러 고급** 선택
      - **완료** 선택

1. 변경 내용을 완료한 후 오른쪽 상단에서 **동기화**&#x200B;를 선택합니다. 성공 알림을 받게 됩니다.

   >[!NOTE]
   >
   > 새로 고침하여 맞춤화된 변경 사항 및 Experience Manager Guides 후 처리 단계가 최종 워크플로우 모델에 있는지 확인합니다.

1. **DAM 자산 업데이트 워크플로우**&#x200B;의 유효성을 검사하면 해당 런처 구성을 확인하십시오. 이렇게 하려면 AEM Workflow 인터페이스로 이동하여 런처를 엽니다.

   ```http
   http://localhost:4502/libs/cq/workflow/content/console.html
   ```

   **DAM 자산 업데이트 워크플로우**&#x200B;에 해당하는 \(필요한 경우\) 다음 두 개의 런처 \(활성 상태여야 함\)를 찾아 변경합니다.

1. *DAM 자산 업데이트 워크플로우*&#x200B;에 대한 &quot;**노드가 생성됨**&quot;의 런처- `"jcr:content/jcr:mimeType!=video"` 조건의 경우 &#39;Globbing&#39; 값은 다음과 같아야 합니다.

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - &#39;excludeList&#39;에는 `"event-user-data:changedByWorkflowProcess"`이(가) 있어야 합니다.
   - 조건 &quot;*&quot;의* DAM 자산 업데이트 워크플로우 -**에 대한 &quot;**&#x200B;노드가 수정됨`jcr:content/jcr:mimeType!=video`&quot;의 런처, &#39;Globbing&#39; 값은 다음과 같아야 합니다.

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - `excludeList`에 `"event-user-data:changedByWorkflowProcess"`이(가) 있어야 합니다.

1. 업그레이드가 완료되면 사용자 지정/오버레이가 새 애플리케이션 코드와 일치하도록 확인 및 업데이트되었는지 확인합니다. 다음은 몇 가지 예입니다.
   - `/libs/fmditaor/libsshould`에서 오버레이된 모든 구성 요소를 새 제품 코드와 비교하고 아래의/앱에서 오버레이된 파일에서 업데이트를 수행해야 합니다.
   - 제품에서 사용되는 모든 `clientlib` 범주는 변경 사항을 검토해야 합니다. 최신 기능을 사용하려면 재정의된 구성 `\(examples below\)`을(를) 최신 구성과 비교해야 합니다.
   - elementmapping.xml
   - `ui\_config.json\(may have been set in folder profiles\)`
   - 수정된 `com.adobe.fmdita.config.ConfigManager`

1. damAssetLucene에서 사용자 지정을 추가한 경우 다시 적용해야 할 수 있습니다. 이러한 변경 내용을 적용한 후 reindex를 true로 설정합니다. 이렇게 하면 기존 노드를 맞춤화로 다시 색인화하게 됩니다. 완료되면 색인 재지정 플래그가 다시 false로 설정됩니다. 시스템의 에셋 수에 따라 몇 시간 정도 소요될 수 있습니다.

### Experience Manager Guides 색인을 다시 색인화하는 단계

1. `crx/de`을(를) 열고 인덱스 경로 `/oak:index/guidesAssetProperties`(으)로 이동
2. 인덱스 다시 지정 속성을 `true`(기본적으로 `false`)로 설정하고 **모두 저장**&#x200B;을(를) 클릭합니다.
3. 다시 색인이 완료되면 다시 색인 속성이 `false`(으)로 설정되고 색인 수가 1씩 증가합니다.

   >[!NOTE]
   >
   > 이 작업은 표시되는 데이터의 양에 따라 몇 분 정도 소요될 수 있습니다.
4. 추가 또는 수정된 다른 인덱스에 대해 동일한 단계를 수행합니다. `guidesBulkActivation`, `guidesPeerLinkIndex` 및 `guidesKonnectTemplateIndex`.

### 기존 콘텐츠를 색인화하는 단계

기존 콘텐츠를 색인화하려면 다음 단계를 수행하십시오.

- 올바른 인증을 사용하여 서버 \- `http://<server:port\>/bin/guides/map-find/indexing`에 대한 POST 요청을 실행합니다. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵이 인덱싱됩니다. || 예: `https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`)

- API가 `jobId`을(를) 반환합니다. 작업 상태를 확인하려면 작업 ID가 포함된 GET 요청을 동일한 끝점인 `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\(예: ` http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)에 보낼 수 있습니다.

- 작업이 완료되면 위의 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.


>[!NOTE]
>
> 사용자 지정 스키마를 사용하는 경우 **카탈로그 통합** 옵션의 AEM 저장소에 있는 사용자 지정 DTD 및 XSD catalog.xml 파일의 경로를 정의해야 합니다.

### `'fmdita rewriter'` 충돌을 처리하는 단계

Experience Manager Guides에는 교차 맵(서로 다른 두 맵의 주제 간 링크)의 경우 생성되는 링크를 처리하기 위한 [**사용자 지정 sling 재작성기**](../install-conf-guide/conf-output-generation.md#custom-rewriter) 모듈이 있습니다.

코드베이스에 다른 사용자 지정 sling 재작성기가 있는 경우, Experience Manager Guides sling 재작성기는 `'order'` 50을 사용하므로 50보다 큰 `'order'` 값을 사용하십시오.  재정의하려면 50보다 큰 값이 필요합니다. 자세한 내용은 [출력 다시 쓰기 파이프라인](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)을 참조하십시오.

이 업그레이드 중에 `'order'` 값이 1000에서 50으로 변경되었으므로 기존 사용자 지정 재작성기가 있는 경우 `'fmdita-rewriter'`과(와) 병합해야 합니다.


### damAssetLucene를 다시 인덱싱하는 절차

AEM Guides이 포함된 damAssetLucene에 대한 색인 정의가 업데이트되었습니다. 필요한 버전으로 업그레이드한 후 damAssetLucene를 다시 인덱싱하려면 [이 문서](https://experienceleague.adobe.com/ko/docs/experience-cloud-kcs/kbarticles/ka-16460)를 참조하십시오.

>[!NOTE]
>
> 설명서를 따르는 동안 저장 작업을 통해 두 속성(`reindex=true`에 대한 `reindex-async=true` 및 `/oak:index/damAssetLucene`)이 동시에 업데이트되었는지 확인하십시오.

