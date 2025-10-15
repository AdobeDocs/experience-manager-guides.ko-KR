---
title: Adobe Experience Manager Guides 업그레이드
description: Adobe Experience Manager Guides 업그레이드 방법 알아보기
exl-id: f058b39f-7408-4874-942b-693e133886cf
feature: Installation
role: Admin
level: Experienced
source-git-commit: 140def886ff52d361d3c76a5e47607ab58408f04
workflow-type: tm+mt
source-wordcount: '9151'
ht-degree: 0%

---

# Adobe Experience Manager Guides 업그레이드 {#id224MBE0M0XA}

>[!NOTE]
>
> 사용 허가된 제품 버전에 맞는 업그레이드 지침을 따르십시오.

현재 버전의 Experience Manager Guides을 버전 5.1.0 서비스 팩 1로 업그레이드할 수 있습니다.

- 버전 5.1.0을 사용 중인 경우 버전 5.1.0 서비스 팩 1로 바로 업그레이드할 수 있습니다.
- 버전 4.6.0, 4.6.x, 5.0.0 또는 5.0.x를 사용하는 경우 버전 5.1.0으로 업그레이드해야 합니다.
- 버전 4.6.3, 4.6.1, 4.6 또는 4.4를 사용하는 경우 버전 5.0.0으로 업그레이드해야 합니다.
- 버전 4.3.x, 4.2, 4.2.1(핫픽스 4.2.1.3), 4.1 또는 4.1.x를 사용하는 경우 버전 5.0.0으로 업그레이드하기 전에 버전 4.4로 업그레이드해야 합니다.
- 버전 4.0을 사용 중인 경우 버전 4.3.x로 업그레이드하기 전에 버전 4.2로 업그레이드해야 합니다.
- 버전 3.8.5를 사용하는 경우 버전 4.2로 업그레이드하기 전에 버전 4.0으로 업그레이드해야 합니다.
- 3.8.5 이전 버전을 사용하는 경우 [Experience Manager Guides 도움말 PDF 보관](https://helpx.adobe.com/kr/xml-documentation-for-experience-manager/archive.html)에 있는 제품별 설치 안내서의 Adobe Experience Manager Guides 업그레이드 섹션을 참조하십시오.


>[!NOTE]
>
> Experience Manager Guides 버전을 업그레이드하기 전에 AEM 서비스 팩을 설치해야 합니다.

자세한 내용은 다음 절차를 참조하십시오.

- [버전 5.1.0으로 업그레이드](#upgrade-to-version-510)
- [버전 5.0.0으로 업그레이드](#upgrade-to-version-500)
- [버전 4.6.0으로 업그레이드](#upgrade-to-version-460)
- [버전 4.4.0으로 업그레이드](#upgrade-to-version-440)
- [버전 4.3.1.5(으)로 업그레이드](#upgrade-to-version-4315)
- [버전 4.3.1로 업그레이드](#upgrade-to-version-431)
- [버전 4.3.0으로 업그레이드](#upgrade-to-version-430)
- [버전 4.2.1로 업그레이드](#upgrade-to-version-421)
- [버전 4.2로 업그레이드](#upgrade-to-version-42)
- [3.8.5에서 버전 4.0으로 업그레이드](#upgrade-from-version-385-to-version-40)


>[!IMPORTANT]
>
> 업그레이드를 시작하기 전에 전체 시스템 백업을 수행하여 데이터 손실을 방지하십시오.

## 버전 3.8.5에서 버전 4.0으로 업그레이드

Experience Manager Guides 버전 3.8.5를 사용하는 경우 Experience Manager Guides 버전 4.0으로 업그레이드할 수 있습니다. 업그레이드 기능을 사용하면 이전 버전의 Experience Manager Guides을 제거할 필요가 없습니다.

프로세스를 실행하기 전에 완료해야 하는 특정 작업이 있습니다. 다음 하위 섹션에서는 사전 요구 사항, 보고서 생성 및 마이그레이션 프로세스를 안내합니다. 또한 Experience Manager Guides 버전 4.0을 설치한 후 고객 설정에 따라 다양한 구성을 사용자 지정할 수 있습니다.

>[!NOTE]
>
> 이 업그레이드 프로세스는 버전 3.8.5에서 버전 4.0으로만 적용할 수 있습니다. 버전 3.4 이상에서 3.8.5로 업그레이드하는 절차는 *Experience Manager Guides 도움말 PDF 보관*&#x200B;에 있는 제품별 설치 안내서의 [Adobe Experience Manager Guides 업그레이드](https://helpx.adobe.com/kr/xml-documentation-for-experience-manager/archive.html) 섹션을 참조하십시오.



**&#x200B;**&#x200B;사전 요구 사항&#x200B;**&#x200B;**

Experience Manager Guides 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. 검토를 위해 열려 있는 항목의 검토 주석을 가져왔습니다.
1. 모든 활성 검토를 닫았습니다.
1. 모든 번역 작업을 마감했습니다.
1. Experience Manager Guides의 이전 버전 \(주 버전 또는 패치 릴리스\) 맨 위에 설치된 Experience Manager Guides 핫픽스를 모두 제거합니다.

**버전 4.0을 설치하기 전에**

버전 4.0을 설치하기 전에 다음 단계를 수행하십시오.

1. 이 시점에서 Experience Manager Guides이 버전 3.8.5에 있는지 확인합니다.
1. 업그레이드 스크립트 패키지를 다운로드합니다. 이렇게 하려면 zip 파일을 다운로드할 [XML Documentation 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 &quot;Adobe 솔루션 4.0 업그레이드 패키지&quot;를 검색합니다.
1. 패키지 관리자를 통해 이 패키지를 AEM에 업로드하고 이 패키지를 설치합니다.
1. 업그레이드 패키지가 설치되면 아래의 지정된 스크립트를 동일한 순서로 실행하고 지정된 지침을 따릅니다.

**업그레이드 호환성 API 확인**

이 API는 현재 시스템 상태를 평가하고 업그레이드가 가능한지 여부를 보고하도록 설계되었습니다. 이 스크립트를 실행하려면 아래의 특정 끝점을 트리거합니다.

| 끝점 | /bin/dxml/upgrade/3xto4x/report |
| --- | --- |
| 요청 유형 | **GET** 관리자로 AEM 인스턴스에 로그인한 웹 브라우저를 사용할 수 있습니다. |
| 예상 응답 | -   모든 필수 노드를 이동할 수 있는 경우 합격 검사를 받게 됩니다. <br>-   대상 위치에 노드가 있는 경우 관련 오류가 발생합니다. 저장소 \(노드 /var/dxml\ 삭제)를 정리하고 업그레이드 패키지를 다시 설치한 다음 이 끝점을 다시 트리거합니다. <br>**참고:** 대상 위치가 3.x Experience Manager Guides에서 이전에 사용되지 않으므로 일반적인 오류가 아닙니다. <br> -   이 스크립트가 성공하지 못할 경우 진행하지 말고 고객 성공 팀에 보고하십시오. |

**시스템 데이터 마이그레이션 API**

이 API는 **마이그레이션 매핑** 섹션에 언급된 대로 시스템 데이터를 마이그레이션하도록 설계되었습니다.

1. 업그레이드 호환성 확인 API에 실패한 경우 이 스크립트를 실행하지 마십시오\(계속 진행하지 마십시오\).
1. 업그레이드 호환성 확인 API가 성공을 반환하면 업그레이드 스크립트를 실행할 수 있습니다.

| 끝점 | /bin/dxml/upgrade/3xto4x |
| --- | --- |
| 요청 유형 | **POST** 이 스크립트는 POST 요청이므로 Postman과 같은 에이전트를 통해 실행해야 합니다. |
| 예상 응답 | -   마이그레이션이 성공하면 XML Documentation 솔루션 버전 4.0.<br>-   오류가 있는 경우 마지막 체크포인트로 복구하고 API 출력과 함께 오류 로그를 고객 성공 팀과 공유합니다. |

**마이그레이션 매핑**: 위의 API는 원본 위치 아래의 모든 데이터를 대상 위치로 마이그레이션합니다.

| 소스 | 대상 |
|------|------|
| /content/fmdita | /var/dxml |
| /content/dxml | /var/dxml |
| /etc/fmdita | /libs/fmdita |

## 버전 4.0 설치 {#id23598G006XA}

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

버전 4.2로 업그레이드하는 방법은 현재 버전의 Experience Manager Guides에 따라 다릅니다.

버전 4.0, 4.1 또는 4.1.x를 사용하는 경우 버전 4.2로 바로 업그레이드할 수 있습니다.

**&#x200B;**&#x200B;사전 요구 사항&#x200B;**&#x200B;**

Experience Manager Guides 4.2 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.0, 4.1 또는 4.1.x로 업그레이드되었습니다.
1. 모든 번역 작업을 마감했습니다.
1. **클래스의 로그 수준을** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 변경하고 이 로그를 새 로그 파일(예: `logs/translation_upgrade.log.`)에 추가했습니다.

>[!NOTE]
>
> 모든 활성 리뷰를 닫아야 합니다. 4.2로 업그레이드하는 동안 검토 작업이 닫히지 않으면 진행 중인 이전 검토 작업이 이전 검토 페이지에서 사용자를 계속 사용하게 되며 업그레이드 후 생성된 검토 작업에는 기능의 최신 업데이트가 표시됩니다.

## 버전 4.2 설치 {#id2245IK0E0EV}

1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 4.2 버전 패키지를 다운로드합니다.
1. 버전 4.2 패키지를 설치합니다.
1. 패키지 설치를 완료한 후 로그에서 다음 메시지를 기다립니다.

   `Completed the post deployment setup script`

   위의 메시지는 설치 단계가 모두 완료되었음을 나타냅니다.

   다음 오류 접두사가 발생하면 고객 성공 팀에 보고하십시오.

   - 배포 후 설정 스크립트 오류
   - 번역 맵을 포팅하는 동안 예외 발생
   - v1에서 v2로의 번역 맵을 속성에 대해 포트할 수 없음
1. 필요한 경우 버전 4.2와 함께 릴리스된 Oxygen 커넥터 플러그인을 업그레이드하십시오.
1. 패키지를 설치한 후 브라우저 캐시를 지웁니다.
1. 다음 섹션에 자세히 설명된 대로 맞춤화를 계속 업그레이드하십시오.

## 버전 4.2를 설치한 후 {#id2326F02004K}

>[!IMPORTANT]
>
> 업그레이드된 서버에 하이 테크 템플릿이 표시되지 않습니다. 서버에 하이 테크 템플릿을 포함하려면 다음을 복사합니다. Source: /libs/fmdita/pdf/하이 테크 대상: /content/dam/dita-templates/pdf

Experience Manager Guides을 설치한 후 새로 설치한 버전에서 설정에 적용할 수 있는 다양한 구성을 병합할 수 있습니다.

>[!NOTE]
>
> dam-update-asset 모델은 맞춤화될 수 있다. 따라서 맞춤화가 수행된 경우 맞춤화와 Experience Manager Guides을 모델의 작업 복사본으로 동기화해야 합니다.

1. **DAM 자산 업데이트 워크플로우 \(변경 후 처리\):**

1. URL 열기:

   ```http
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html
   ```

1. **DAM 자산 업데이트 워크플로우**&#x200B;를 선택합니다.
1. **편집**&#x200B;을 클릭합니다.
1. **DXML 사후 프로세스 개시자** 구성 요소가 있는 경우 사용자 지정이 동기화되었는지 확인하십시오.
1. **DXML 사후 프로세스 개시자** 구성 요소가 없으면 다음 단계를 수행하여 해당 구성 요소를 삽입합니다.

1. **구성 요소 삽입** \(프로세스의 마지막 단계로 Experience Manager Guides 후처리를 담당함\)을 클릭합니다.
1. 아래 세부 정보로 **프로세스 단계**&#x200B;을(를) 구성하십시오.

   **공통 탭**

   **제목:** DXML 사후 프로세스 개시자

   **설명**: 수정/생성된 에셋의 DXML 사후 처리에 대한 슬링 작업을 트리거하는 DXML 사후 처리 개시자 단계입니다.

   **프로세스 탭**

   - **프로세스** 드롭다운에서 **DXML 사후 프로세스 개시자**&#x200B;를 선택합니다.

   - **핸들러 고급** 선택

   - **완료** 선택

1. 변경 내용을 완료한 후 오른쪽 상단의 **동기화**&#x200B;를 클릭합니다. 성공 알림을 받게 됩니다.

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
   - 조건 &quot;*&quot;에 대한* DAM 자산 업데이트 워크플로우 -**의 &quot;**&#x200B;노드가 수정됨`jcr:content/jcr:mimeType!=video`&quot;에 대한 런처,
   - &#39;Globbing&#39; 값은 다음과 같아야 합니다.

   ```json
   /content/dam(/((?!/subassets|/translation_output).)*/)renditions/original
   ```

   - &#39;excludeList&#39;에는 `"event-user-data:changedByWorkflowProcess"`이(가) 있어야 합니다.
1. 업그레이드가 완료되면 사용자 지정/오버레이가 새 애플리케이션 코드와 일치하도록 확인 및 업데이트되었는지 확인합니다. 다음은 몇 가지 예입니다.
   - /libs/fmditaor/libsfrom에서 오버레이된 모든 구성 요소는 새 제품 코드와 비교해야 하며, 업데이트는 / 앱에서 오버레이된 파일에서 수행해야 합니다.
   - 제품에서 사용되는 모든 clientlib 카테고리는 변경 사항을 검토해야 합니다. 최신 기능을 가져오려면 재정의된 모든 구성 \(아래 예제\)을 최신 구성과 비교해야 합니다.
   - elementmapping.xml
   - ui\_config.json\(폴더 프로필에 설정되었을 수 있음\)
   - 수정된 `com.adobe.fmdita.config.ConfigManager`
   - 사용자 지정 코드가 이전 경로([마이그레이션 매핑](#id2244LE040XA) 섹션에서 언급한 대로)를 사용하고 있는지 확인하십시오\ - 사용자 지정 내용이 예상대로 작동하도록 새 경로로 업데이트해야 합니다.
1. 현재 릴리스 \([릴리스 정보](../release-info/release-notes-4-3.md)\ 확인)에서 가져온 새 구성에 대해 읽어 보고 기능에 영향을 주는지 확인한 다음 적절한 조치를 취하십시오. 예를 들어 버전 4.0에 도입된 &quot;향상된 파일 및 버전 처리&quot;를 사용하는 것이 좋습니다. 이 경우 구성을 활성화해야 합니다.

## 새 찾기 및 바꾸기를 사용할 기존 콘텐츠를 색인화하는 단계:

기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 맵 수준에서 새 찾기 및 바꾸기 텍스트를 사용합니다.

- 올바른 인증을 사용하여 서버 \- `http://<server:port\>/bin/guides/map-find/indexing`에 대한 POST 요청을 실행합니다. \(선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵은 인덱싱됩니다. \|\| 예: `https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`\)

- API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 있는 GET 요청을 동일한 끝점으로 보낼 수 있습니다.

`http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\(예: `http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\)

- 작업이 완료되면 위의 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.

업그레이드 작업이 실패하고 오류 로그에 다음 오류가 표시되는 경우:

&quot;*쿼리*&#x200B;가 *개 이상의 노드* 100000 읽거나 통과했습니다. 다른 작업에 영향을 주지 않도록 처리가 중지되었습니다.&quot;

이 문제는 업그레이드에 사용된 쿼리에 대해 색인이 제대로 설정되지 않았기 때문에 발생할 수 있습니다. 다음 해결 방법을 시도할 수 있습니다.

1. damAssetLucene oak 인덱스에서 부울 속성 `indexNodeName`을(를) 노드에 `true`(으)로 추가합니다.
   `/oak:index/damAssetLucene/indexRules/dam:Asset`
1. 노드 아래에 발췌한 이름의 새 노드를 추가합니다.

   `/oak:index/damAssetLucene/indexRules/dam:Asset/properties`
를 누르고 노드에서 다음 속성을 설정합니다.

   ```
   name - rep:excerpt
   propertyIndex - {Boolean}true
   notNullCheckEnabled - {Boolean}true
   ```

   `damAssetLucene`의 구조는 다음과 같아야 합니다.

   ```
   <damAssetLucene compatVersion="{Long}2" async="async, nrt" jcr:primaryType="oak:QueryIndexDefinition" evaluatePathRestrictions="{Boolean}true" type="lucene">
   <indexRules jcr:primaryType="nt:unstructured">
     <dam:Asset indexNodeName="{Boolean}true" jcr:primaryType="nt:unstructured">
       <properties jcr:primaryType="nt:unstructured">
         <excerpt name="rep:excerpt" propertyIndex="{Boolean}true" jcr:primaryType="nt:unstructured" notNullCheckEnabled="{Boolean}true"/>
       </properties>
       </dam:Asset>
     </indexRules>
   </damAssetLucene>    
   ```


   (다른 기존 노드 및 속성과 함께)

1. `damAssetLucene` 인덱스를 다시 인덱싱합니다(다시 인덱싱 플래그를 `true`(으)로 설정).
다시 `false`이(가) 될 때까지 기다립니다(리인덱싱이 완료되었음을 나타냄). 색인의 크기에 따라 몇 시간 정도 소요될 수 있습니다.
1. 이전 단계를 수행하여 인덱싱 스크립트를 다시 실행합니다.


## 버전 4.2.1로 업그레이드

>[!TIP]
>
>버전 4.2.1 위에 핫픽스 4.2.1.3을(를) 설치하는 것이 좋습니다.

버전 4.2.1로 업그레이드하는 방법은 현재 버전의 Experience Manager Guides에 따라 다릅니다. 버전 4.1, 4.1.x 또는 4.2를 사용하는 경우 버전 4.2.1로 바로 업그레이드할 수 있습니다.

>[!NOTE]
>
>사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

**&#x200B;**&#x200B;사전 요구 사항&#x200B;**&#x200B;**

Experience Manager Guides 4.2.1 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.1, 4.1.x 또는 4.2로 업그레이드되었습니다.
1. 모든 번역 작업을 마감했습니다.
1. **클래스의 로그 수준을** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 변경하고 이 로그를 새 로그 파일(예: `logs/translation_upgrade.log.`)에 추가했습니다.

>[!NOTE]
>
> 모든 활성 리뷰를 닫아야 합니다. 4.2로 업그레이드하는 동안 검토 작업이 닫히지 않으면 진행 중인 이전 검토 작업이 이전 검토 페이지에서 사용자를 계속 사용하게 되며 업그레이드 후 생성된 검토 작업에는 기능의 최신 업데이트가 표시됩니다.

## 버전 4.2.1 설치

1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 4.2.1 버전 패키지를 다운로드합니다.
1. 버전 4.2.1 패키지를 설치합니다.
1. 트리거를 적중하여 번역 맵 업그레이드 작업을 시작하도록 선택할 수 있습니다. 자세한 내용은 [서블릿을 통해 스크립트 트리거 사용](#enable-trigger-of-script-via-a-servlet-for-421)을 참조하십시오.


1. 패키지 설치를 완료한 후 로그에서 다음 메시지를 기다립니다.

   `Completed the post deployment setup script`

   위의 메시지는 설치 단계가 모두 완료되었음을 나타냅니다.

   다음 오류 접두사가 발생하면 고객 성공 팀에 보고하십시오.

   - 배포 후 설정 스크립트 오류
   - 번역 맵을 포팅하는 동안 예외 발생
   - v1에서 v2로의 번역 맵을 속성에 대해 포트할 수 없음
1. 필요한 경우 버전 4.2와 함께 릴리스된 Oxygen 커넥터 플러그인을 업그레이드하십시오.
1. 패키지를 설치한 후 브라우저 캐시를 지웁니다.
1. 다음 섹션에 자세히 설명된 대로 맞춤화를 계속 업그레이드하십시오.

### 서블릿을 통한 스크립트 트리거 활성화(4.2.1용)

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

샘플 로그:
다음은 스크립트를 트리거한 후 로그 파일에 표시되는 로그 샘플입니다.

```
04.05.2023 14:17:12.876 *INFO* [[0:0:0:0:0:0:0:1] [1683190032736] POST /bin/guides/script/start HTTP/1.1] com.adobe.dxml.common.executor.RunnableSynchronizedOTS Acquiring lock for job : translation-map-upgrade
04.05.2023 14:17:12.897 *INFO* [pool-59-thread-1] com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Starting the thread to upgrade translation map from V1 to V2
04.05.2023 14:17:12.899 *INFO* [pool-59-thread-1] com.adobe.dxml.common.executor.RunnableSynchronizedOTS Initiating lock for node : /var/dxml/executor-locks/translation-map-upgrade/1683190032886
04.05.2023 14:17:12.901 *INFO* [pool-59-thread-1] com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Starting porting of translation map from V1 to V2
04.05.2023 14:17:12.904 *INFO* [pool-59-thread-1] com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Memory increase is of : 764 kB
04.05.2023 14:17:12.906 *INFO* [pool-59-thread-1] com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Completed porting of translation map from V1 to V2
04.05.2023 14:17:12.907 *INFO* [pool-59-thread-1] com.adobe.dxml.common.executor.RunnableSynchronizedOTS Releasing lock for node : /var/dxml/executor-locks/translation-map-upgrade/1683190032886
04.05.2023 14:17:12.909 *INFO* [pool-59-thread-1] com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Completed the thread to upgrade translation map from V1 to V2
```

다음 단계로 진행하기 전에 `com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Completed porting of translation map from V1 to V2` 및 `com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Completed the thread to upgrade translation map from V1 to V2`을(를) 찾으십시오.



## 버전 4.2.1을 설치한 후

>[!IMPORTANT]
>
> 업그레이드된 서버에 하이 테크 템플릿이 표시되지 않습니다. 서버에 하이 테크 템플릿을 포함하려면 다음을 복사합니다. Source: /libs/fmdita/pdf/하이 테크 대상: /content/dam/dita-templates/pdf

Experience Manager Guides을 설치한 후 새로 설치한 버전에서 설정에 적용할 수 있는 다양한 구성을 병합할 수 있습니다.

>[!NOTE]
>
> dam-update-asset 모델은 맞춤화될 수 있다. 따라서 맞춤화가 수행된 경우 맞춤화와 Experience Manager Guides을 모델의 작업 복사본으로 동기화해야 합니다.

1. **DAM 자산 업데이트 워크플로우 \(변경 후 처리\):**

1. URL 열기:

   ```http
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html
   ```

1. **DAM 자산 업데이트 워크플로우**&#x200B;를 선택합니다.
1. **편집**&#x200B;을 클릭합니다.
1. **DXML 사후 프로세스 개시자** 구성 요소가 있는 경우 사용자 지정이 동기화되었는지 확인하십시오.
1. **DXML 사후 프로세스 개시자** 구성 요소가 없으면 다음 단계를 수행하여 해당 구성 요소를 삽입합니다.

1. **구성 요소 삽입** \(프로세스의 마지막 단계로 Experience Manager Guides 후처리를 담당함\)을 클릭합니다.
1. 아래 세부 정보로 **프로세스 단계**&#x200B;을(를) 구성하십시오.

   **공통 탭**

   **제목:** DXML 사후 프로세스 개시자

   **설명**: 수정/생성된 에셋의 DXML 사후 처리에 대한 슬링 작업을 트리거하는 DXML 사후 처리 개시자 단계입니다.

   **프로세스 탭**

   - **프로세스** 드롭다운에서 **DXML 사후 프로세스 개시자**&#x200B;를 선택합니다.

   - **핸들러 고급** 선택

   - **완료** 선택

1. 변경 내용을 완료한 후 오른쪽 상단의 **동기화**&#x200B;를 클릭합니다. 성공 알림을 받게 됩니다.

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
   - /libs/fmditaor/libsfrom에서 오버레이된 모든 구성 요소는 새 제품 코드와 비교해야 하며, 업데이트는 / 앱에서 오버레이된 파일에서 수행해야 합니다.
   - 제품에서 사용되는 모든 clientlib 카테고리는 변경 사항을 검토해야 합니다. 최신 기능을 가져오려면 재정의된 모든 구성 \(아래 예제\)을 최신 구성과 비교해야 합니다.
   - elementmapping.xml
   - ui\_config.json\(폴더 프로필에 설정되었을 수 있음\)
   - 수정된 `com.adobe.fmdita.config.ConfigManager`
   - 사용자 지정 코드가 이전 경로([마이그레이션 매핑](#id2244LE040XA) 섹션에서 언급한 대로)를 사용하고 있는지 확인하십시오\ - 사용자 지정 내용이 예상대로 작동하도록 새 경로로 업데이트해야 합니다.
1. 현재 릴리스 \([릴리스 정보](../release-info/release-notes-4-2-1.md)\ 확인)에서 가져온 새 구성에 대해 읽어 보고 기능에 영향을 주는지 확인한 다음 적절한 조치를 취하십시오. 예를 들어 버전 4.0에 도입된 &quot;향상된 파일 및 버전 처리&quot;를 사용하는 것이 좋습니다. 이 경우 구성을 활성화해야 합니다.

## 새 찾기 및 바꾸기를 사용할 기존 콘텐츠를 색인화하는 단계:

기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 맵 수준에서 새 찾기 및 바꾸기 텍스트를 사용합니다.

- `damAssetLucene` 인덱싱이 완료되었는지 확인하십시오. 서버에 있는 데이터의 양에 따라 최대 몇 시간이 소요될 수 있습니다. 리인덱싱 필드가 false로 설정되어 있는지 확인하여 리인덱싱이 완료되었는지 확인할 수 있습니다
  `http://<server:port>/oak:index/damAssetLucene`.  또한 `damAssetLucene`에 사용자 지정을 추가한 경우 다시 적용해야 할 수도 있습니다.

- 올바른 인증을 사용하여 서버 \- `http://<server:port\>/bin/guides/map-find/indexing`에 대한 POST 요청을 실행합니다. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵은 인덱싱됩니다. \|\| 예: `https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`)

- 루트 폴더를 전달하여 특정 폴더(및 그 하위 폴더)의 DITA 맵을 인덱싱할 수도 있습니다. 예를 들어, `http://<server:port\>/bin/guides/map-find/indexing?root=/content/dam/test`과 같이 입력합니다. paths 매개 변수와 root 매개 변수가 모두 전달되면 paths 매개 변수만 고려됩니다.

- API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 포함된 GET 요청을 동일한 끝점인 `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\(예: `http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\)로 보낼 수 있습니다.


- 작업이 완료되면 위의 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.


## 버전 4.3.0으로 업그레이드

버전 4.3.0으로 업그레이드하는 방법은 현재 버전의 Experience Manager Guides에 따라 다릅니다. 버전 4.2 또는 4.2.x를 사용 중인 경우 버전 4.3.0으로 바로 업그레이드할 수 있습니다.

>[!NOTE]
>
>사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

**&#x200B;**&#x200B;사전 요구 사항&#x200B;**&#x200B;**

Experience Manager Guides 4.3.0 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.2 또는 4.2.x로 업그레이드하고 해당 설치 단계를 완료했습니다.
1. 모든 번역 작업을 마감했습니다.



## 버전 4.3.0 설치

1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 4.3.0 버전 패키지를 다운로드합니다.
1. 버전 4.3.0 패키지를 설치합니다.
1. 패키지를 설치한 후 브라우저 캐시를 지웁니다.
1. 폴더 프로필의 `ui_config.json`XML 편집기 구성&#x200B;**탭에서** 파일을 업그레이드합니다.


## 버전 4.3.0을 설치한 후

Experience Manager Guides을 설치한 후 새로 설치한 버전에서 설정에 적용할 수 있는 다양한 구성을 병합할 수 있습니다.

## 끊어진 링크 보고서를 사용하기 위해 기존 콘텐츠를 게시하는 절차


기존 콘텐츠를 후처리하고 새 끊어진 링크 보고서를 사용하려면 다음 단계를 수행하십시오.

1. (선택 사항) 시스템에 100,000개 이상의 dita 파일이 있는 경우 `queryLimitReads`의 `org.apache.jackrabbit.oak.query.QueryEngineSettingsService`을(를) 더 큰 값(존재하는 에셋 수보다 큰 값(예: 200,000))으로 업데이트한 다음 다시 배포합니다.

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



## 버전 4.3.1로 업그레이드

버전 4.3.1로 업그레이드하는 방법은 현재 버전의 Experience Manager Guides에 따라 다릅니다. 버전 4.3.0, 4.2 또는 4.2.1을 사용 중인 경우 버전 4.3.1로 바로 업그레이드할 수 있습니다.

>[!NOTE]
>
>사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

**&#x200B;**&#x200B;사전 요구 사항&#x200B;**&#x200B;**

Experience Manager Guides 4.3.1 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.3.0, 4.2 또는 4.2.1로 업그레이드하고 해당 설치 단계를 완료했습니다.
1. (선택 사항) 모든 번역 작업을 마감했습니다.
1. **클래스의 로그 수준을** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 변경하고 이 로그를 새 로그 파일(예: `logs/translation_upgrade.log`)에 추가했습니다.


## 버전 4.3.1 설치

1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 4.3.1 버전 패키지를 다운로드합니다.
1. 버전 4.3.1 패키지를 설치합니다.
1. 트리거를 적중하여 번역 맵 업그레이드 작업을 시작하도록 선택할 수 있습니다. 자세한 내용은 [서블릿을 통해 스크립트 트리거 사용](#enable-trigger-of-script-via-a-servlet-for-431)을 참조하십시오.


1. 패키지 설치를 완료한 후 로그에서 다음 메시지를 기다립니다.

   `Completed the post deployment setup script`

   위의 메시지는 설치 단계가 모두 완료되었음을 나타냅니다.

   다음 오류 접두사가 발생하면 고객 성공 팀에 보고하십시오.

   - 배포 후 설정 스크립트 오류
   - 번역 맵을 포팅하는 동안 예외 발생
   - v1에서 v2로의 번역 맵을 속성에 대해 포트할 수 없음
1. 필요한 경우 버전 4.2와 함께 릴리스된 Oxygen 커넥터 플러그인을 업그레이드하십시오.
1. 패키지를 설치한 후 브라우저 캐시를 지웁니다.
1. 다음 섹션에 자세히 설명된 대로 맞춤화를 계속 업그레이드하십시오.

### 서블릿을 통한 스크립트 트리거 활성화(4.3.1용)

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

샘플 로그:
다음은 스크립트를 트리거한 후 로그 파일에 표시되는 로그 샘플입니다.

```
04.05.2023 14:17:12.876 *INFO* [[0:0:0:0:0:0:0:1] [1683190032736] POST /bin/guides/script/start HTTP/1.1] com.adobe.dxml.common.executor.RunnableSynchronizedOTS Acquiring lock for job : translation-map-upgrade
04.05.2023 14:17:12.897 *INFO* [pool-59-thread-1] com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Starting the thread to upgrade translation map from V1 to V2
04.05.2023 14:17:12.899 *INFO* [pool-59-thread-1] com.adobe.dxml.common.executor.RunnableSynchronizedOTS Initiating lock for node : /var/dxml/executor-locks/translation-map-upgrade/1683190032886
04.05.2023 14:17:12.901 *INFO* [pool-59-thread-1] com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Starting porting of translation map from V1 to V2
04.05.2023 14:17:12.904 *INFO* [pool-59-thread-1] com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Memory increase is of : 764 kB
04.05.2023 14:17:12.906 *INFO* [pool-59-thread-1] com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Completed porting of translation map from V1 to V2
04.05.2023 14:17:12.907 *INFO* [pool-59-thread-1] com.adobe.dxml.common.executor.RunnableSynchronizedOTS Releasing lock for node : /var/dxml/executor-locks/translation-map-upgrade/1683190032886
04.05.2023 14:17:12.909 *INFO* [pool-59-thread-1] com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Completed the thread to upgrade translation map from V1 to V2
```

다음 단계로 진행하기 전에 `com.adobe.fmdita.translationservices.TranslationMapUpgradeScript Completed porting of translation map from V1 to V2` 및 `com.adobe.fmdita.xmltranslation.ots.TranslationMapUpgradeOTS Completed the thread to upgrade translation map from V1 to V2`을(를) 찾으십시오.

## 버전 4.3.1을 설치한 후



Experience Manager Guides을 설치한 후 새로 설치한 버전에서 설정에 적용할 수 있는 다양한 구성을 병합할 수 있습니다.

>[!NOTE]
>
> dam-update-asset 모델은 맞춤화될 수 있다. 따라서 맞춤화가 수행된 경우 맞춤화와 Experience Manager Guides을 모델의 작업 복사본으로 동기화해야 합니다.

1. **DAM 자산 업데이트 워크플로우 \(변경 후 처리\):**

1. URL 열기:

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM 자산 업데이트 워크플로우**&#x200B;를 선택합니다.
1. **편집**&#x200B;을 클릭합니다.
1. **DXML 사후 프로세스 개시자** 구성 요소가 있는 경우 사용자 지정이 동기화되었는지 확인하십시오.
1. **DXML 사후 프로세스 개시자** 구성 요소가 없으면 다음 단계를 수행하여 해당 구성 요소를 삽입합니다.

1. **구성 요소 삽입** \(프로세스의 마지막 단계로 Experience Manager Guides 후처리를 담당함\)을 클릭합니다.
1. 아래 세부 정보로 **프로세스 단계**&#x200B;을(를) 구성하십시오.

   **공통 탭**

   **제목:** DXML 사후 프로세스 개시자

   **설명**: 수정/생성된 에셋의 DXML 사후 처리에 대한 슬링 작업을 트리거하는 DXML 사후 처리 개시자 단계입니다.

   **프로세스 탭**

   - **프로세스** 드롭다운에서 **DXML 사후 프로세스 개시자**&#x200B;를 선택합니다.

   - **핸들러 고급** 선택

   - **완료** 선택

1. 변경 내용을 완료한 후 오른쪽 상단의 **동기화**&#x200B;를 클릭합니다. 성공 알림을 받게 됩니다.

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
   - /libs/fmditaor/libsfrom에서 오버레이된 모든 구성 요소는 새 제품 코드와 비교해야 하며, 업데이트는 / 앱에서 오버레이된 파일에서 수행해야 합니다.
   - 제품에서 사용되는 모든 clientlib 카테고리는 변경 사항을 검토해야 합니다. 최신 기능을 가져오려면 재정의된 모든 구성 \(아래 예제\)을 최신 구성과 비교해야 합니다.
   - elementmapping.xml
   - ui\_config.json\(폴더 프로필에 설정되었을 수 있음\)
   - 수정된 `com.adobe.fmdita.config.ConfigManager`


## 기존 콘텐츠를 색인화하는 단계

>[!NOTE]
>
> 4.3.0 또는 4.2.1에서 업그레이드하는 경우 이러한 단계를 수행할 필요가 없습니다.

기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 맵 수준에서 새 찾기 및 바꾸기 텍스트를 사용합니다.


- 올바른 인증을 사용하여 서버 \- `http://<server:port\>/bin/guides/map-find/indexing`에 대한 POST 요청을 실행합니다. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵은 인덱싱됩니다. \|\| 예: `https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`)


- API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 포함된 GET 요청을 동일한 끝점인 `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\(예: `http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\)로 보낼 수 있습니다.


- 작업이 완료되면 위의 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.

## 끊어진 링크 보고서를 사용하기 위해 기존 콘텐츠를 게시하는 절차

>[!NOTE]
>
> 4.3.0에서 업그레이드하는 경우 이러한 단계를 수행할 필요가 없습니다

기존 콘텐츠를 후처리하고 새 끊어진 링크 보고서를 사용하려면 다음 단계를 수행하십시오.

1. (선택 사항) 시스템에 100,000개 이상의 dita 파일이 있는 경우 `queryLimitReads`의 `org.apache.jackrabbit.oak.query.QueryEngineSettingsService`을(를) 더 큰 값(존재하는 에셋 수보다 큰 값(예: 200,000))으로 업데이트한 다음 다시 배포합니다.

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



## 버전 4.3.1.5(으)로 업그레이드

4.3.1.5 버전으로 업그레이드하는 방법은 현재 버전의 Experience Manager Guides에 따라 다릅니다. 버전 4.3.1을 사용하는 경우 버전 4.3.1.5(으)로 바로 업그레이드할 수 있습니다.



## 버전 4.3.1.5 설치

1. 4.3.1.5Adobe 소프트웨어 배포 포털[에서 &#x200B;](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html) 버전 패키지를 다운로드합니다.
1. 버전 4.3.1.5 패키지를 설치하십시오.

1. 설치 프로세스가 완료될 때까지 기다립니다.
1. 다음 섹션에 자세히 설명된 대로 맞춤화를 계속 업그레이드하십시오.


## 4.3.1.5 버전을 설치한 후


>[!NOTE]
>
>org.apache.velocity 번들을 사용하려면 번들을 업로드하기 전에 다음 단계를 수행하십시오.
> 1. `<server>:<port>/system/console/bundles`로 이동합니다.
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

버전 4.4.0으로 업그레이드하는 방법은 현재 버전의 Experience Manager Guides에 따라 다릅니다. 버전 4.3.1, 4.3.0, 4.2 또는 4.2.1(핫픽스 4.2.1.3)을 사용하는 경우 버전 4.4.0으로 바로 업그레이드할 수 있습니다

>[!NOTE]
>
>사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

**&#x200B;**&#x200B;사전 요구 사항&#x200B;**&#x200B;**

Experience Manager Guides 4.4.0 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.3.1, 4.3.0 또는 4.2.1(핫픽스 4.2.1.3)로 업그레이드하고 해당 설치 단계를 완료했습니다.
1. (선택 사항) 모든 번역 작업을 마감했습니다.
1. **클래스의 로그 수준을** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 변경하고 이 로그를 새 로그 파일(예: `logs/translation_upgrade.log`)에 추가했습니다.


## 버전 4.4.0 설치

1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 4.4.0 버전 패키지를 다운로드합니다.
1. 버전 4.4.0 패키지를 설치합니다.
1. 트리거를 적중하여 번역 맵 업그레이드 작업을 시작하도록 선택할 수 있습니다. 자세한 내용은 [서블릿을 통해 스크립트 트리거 사용](#enable-trigger-of-script-via-a-servlet)을 참조하십시오.

1. 패키지 설치를 완료한 후 로그에서 다음 메시지를 기다립니다.

   `Completed the post deployment setup script`

   위의 메시지는 설치 단계가 모두 완료되었음을 나타냅니다.

   다음 오류 접두사가 발생하면 고객 성공 팀에 보고하십시오.

   - 배포 후 설정 스크립트 오류
   - 번역 맵을 포팅하는 동안 예외 발생
   - v1에서 v2로의 번역 맵을 속성에 대해 포트할 수 없음
1. 필요한 경우 버전 4.4.0과 함께 릴리스된 Oxygen 커넥터 플러그인을 업그레이드하십시오.
1. 패키지를 설치한 후 브라우저 캐시를 지웁니다.
1. 다음 섹션에 자세히 설명된 대로 맞춤화를 계속 업그레이드하십시오.


## 버전 4.4.0을 설치한 후

Experience Manager Guides을 설치한 후 새로 설치한 버전에서 설정에 적용할 수 있는 다양한 구성을 병합할 수 있습니다.

>[!NOTE]
>
> dam-update-asset 모델은 맞춤화될 수 있다. 따라서 맞춤화가 수행된 경우 맞춤화와 Experience Manager Guides을 모델의 작업 복사본으로 동기화해야 합니다.

1. **DAM 자산 업데이트 워크플로우 \(변경 후 처리\):**

1. URL 열기:

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM 자산 업데이트 워크플로우**&#x200B;를 선택합니다.
1. **편집**&#x200B;을 클릭합니다.
1. **DXML 사후 프로세스 개시자** 구성 요소가 있는 경우 사용자 지정이 동기화되었는지 확인하십시오.
1. **DXML 사후 프로세스 개시자** 구성 요소가 없으면 다음 단계를 수행하여 해당 구성 요소를 삽입합니다.

1. **구성 요소 삽입** \(프로세스의 마지막 단계로 Experience Manager Guides 후처리를 담당함\)을 클릭합니다.
1. 아래 세부 정보로 **프로세스 단계**&#x200B;을(를) 구성하십시오.

   **공통 탭**

   **제목:** DXML 사후 프로세스 개시자

   **설명**: 수정/생성된 에셋의 DXML 사후 처리에 대한 슬링 작업을 트리거하는 DXML 사후 처리 개시자 단계입니다.

   **프로세스 탭**

   - **프로세스** 드롭다운에서 **DXML 사후 프로세스 개시자**&#x200B;를 선택합니다.

   - **핸들러 고급** 선택

   - **완료** 선택

1. 변경 내용을 완료한 후 오른쪽 상단의 **동기화**&#x200B;를 클릭합니다. 성공 알림을 받게 됩니다.

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
   - /libs/fmditaor/libsfrom에서 오버레이된 모든 구성 요소는 새 제품 코드와 비교해야 하며, 업데이트는 / 앱에서 오버레이된 파일에서 수행해야 합니다.
   - 제품에서 사용되는 모든 clientlib 카테고리는 변경 사항을 검토해야 합니다. 최신 기능을 가져오려면 재정의된 모든 구성 \(아래 예제\)을 최신 구성과 비교해야 합니다.
   - elementmapping.xml
   - ui\_config.json\(폴더 프로필에 설정되었을 수 있음\)
   - 수정된 `com.adobe.fmdita.config.ConfigManager`

1. damAssetLucene에서 사용자 지정을 추가한 경우 다시 적용해야 할 수 있습니다. 이러한 변경 내용을 적용한 후 reindex를 true로 설정합니다. 이렇게 하면 기존 노드를 맞춤화로 다시 색인화하게 됩니다. 완료되면 색인 재지정 플래그가 다시 false로 설정됩니다. 시스템의 에셋 수에 따라 몇 시간 정도 소요될 수 있습니다.

## 기존 콘텐츠를 색인화하는 단계

>[!NOTE]
>
> 4.3.0 또는 4.3.1에서 업그레이드하는 경우 이러한 단계를 수행할 필요가 없습니다.

기존 콘텐츠를 색인화하기 위해 다음 단계를 수행하고 맵 수준에서 새 찾기 및 바꾸기 텍스트를 사용합니다.

- 올바른 인증을 사용하여 서버 \- `http://<server:port\>/bin/guides/map-find/indexing`에 대한 POST 요청을 실행합니다. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵은 인덱싱됩니다. \|\| 예: `https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`)

- API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 포함된 GET 요청을 동일한 끝점인 `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\(예: `http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42`\)로 보낼 수 있습니다.

- 작업이 완료되면 위의 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.

## 끊어진 링크 보고서를 사용하기 위해 기존 콘텐츠를 게시하는 절차

>[!NOTE]
>
> 4.3.0 또는 4.3.1에서 업그레이드하는 경우 이러한 단계를 수행할 필요가 없습니다.

기존 콘텐츠를 후처리하고 새 끊어진 링크 보고서를 사용하려면 다음 단계를 수행하십시오.

1. (선택 사항) 시스템에 100,000개 이상의 dita 파일이 있는 경우 `queryLimitReads`의 `org.apache.jackrabbit.oak.query.QueryEngineSettingsService`을(를) 더 큰 값(존재하는 에셋 수보다 큰 값(예: 200,000))으로 업데이트한 다음 다시 배포합니다.

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

### 서블릿을 통한 스크립트 트리거 활성화

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



## `'fmdita rewriter'` 충돌을 처리하는 단계

Experience Manager Guides에는 교차 맵(서로 다른 두 맵의 주제 간 링크)의 경우 생성되는 링크를 처리하기 위한 [**사용자 지정 sling 재작성기**](../cs-install-guide/conf-output-generation.md#custom-rewriter) 모듈이 있습니다.

코드베이스에 다른 사용자 지정 sling 재작성기가 있는 경우, Experience Manager Guides sling 재작성기는 `'order'` 50을 사용하므로 50보다 큰 `'order'` 값을 사용하십시오.  재정의하려면 50보다 큰 값이 필요합니다. 자세한 내용은 [출력 다시 쓰기 파이프라인](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)을 참조하십시오.

이 업그레이드 중에 `'order'` 값이 1000에서 50으로 변경되었으므로 기존 사용자 지정 재작성기가 있는 경우 `'fmdita-rewriter'`과(와) 병합해야 합니다.


**상위 항목:**&#x200B;[&#x200B;다운로드 및 설치](download-install.md)


## 버전 4.6.0으로 업그레이드

>[!TIP]
>
> 버전 4.6.0 ,4.6.0 서비스 팩 1 또는 4.6.0 서비스 팩 3 위에 4.6.0 서비스 팩 4 를 설치하는 것이 좋습니다. 4.6.0 서비스 팩 4 릴리스의 업그레이드 프로세스는 4.6.0 릴리스와 동일한 단계를 따릅니다.

버전 4.6.0으로 업그레이드하는 방법은 현재 버전의 Experience Manager Guides에 따라 다릅니다. 버전 4.4.0, 4.3.1, 4.3.0, 4.2 또는 4.2.1(핫픽스 4.2.1.3)을 사용하는 경우 버전 4.6.0으로 바로 업그레이드할 수 있습니다.

>[!NOTE]
>
> 사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

**&#x200B;**&#x200B;사전 요구 사항&#x200B;**&#x200B;**

Experience Manager Guides 4.6.0 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.3.1, 4.3.0 또는 4.2.1(핫픽스 4.2.1.3)로 업그레이드하고 해당 설치 단계를 완료했습니다.
1. (선택 사항) 모든 번역 작업을 마감했습니다.
1. **클래스의 로그 수준을** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 변경하고 이 로그를 새 로그 파일(예: `logs/translation_upgrade.log`)에 추가했습니다.


## 버전 4.6.0 설치

1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 4.6.0 버전 패키지를 다운로드합니다.
1. 버전 4.6.0 패키지를 설치합니다.
1. 트리거를 적중하여 번역 맵 업그레이드 작업을 시작하도록 선택할 수 있습니다. 자세한 내용은 [서블릿을 통해 스크립트 트리거 사용](#enable-trigger-of-script-via-a-servlet)을 참조하십시오.

1. 패키지 설치를 완료한 후 로그에서 다음 메시지를 기다립니다.

   `Completed the post deployment setup script`

   위의 메시지는 설치 단계가 모두 완료되었음을 나타냅니다.

   다음 오류 접두사가 발생하면 고객 성공 팀에 보고하십시오.

   - 배포 후 설정 스크립트 오류
   - 번역 맵을 포팅하는 동안 예외 발생
   - v1에서 v2로의 번역 맵을 속성에 대해 포트할 수 없음
1. 필요한 경우 버전 4.6.0과 함께 릴리스된 Oxygen 커넥터 플러그인을 업그레이드하십시오.
1. 패키지를 설치한 후 브라우저 캐시를 지웁니다.

## 버전 4.6.0을 설치한 후

Experience Manager Guides을 설치한 후 새로 설치한 버전에서 설정에 적용할 수 있는 다양한 구성을 병합할 수 있습니다.

>[!NOTE]
>
> dam-update-asset 모델은 맞춤화될 수 있다. 따라서 맞춤화가 수행된 경우 맞춤화와 Experience Manager Guides을 모델의 작업 복사본으로 동기화해야 합니다.

1. **DAM 자산 업데이트 워크플로우 \(변경 후 처리\):**

1. URL 열기:

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM 자산 업데이트 워크플로우**&#x200B;를 선택합니다.
1. **편집**&#x200B;을 클릭합니다.
1. **DXML 사후 프로세스 개시자** 구성 요소가 있는 경우 사용자 지정이 동기화되었는지 확인하십시오.
1. **DXML 사후 프로세스 개시자** 구성 요소가 없으면 다음 단계를 수행하여 해당 구성 요소를 삽입합니다.

1. **구성 요소 삽입** \(프로세스의 마지막 단계로 Experience Manager Guides 후처리를 담당함\)을 클릭합니다.
1. 아래 세부 정보로 **프로세스 단계**&#x200B;을(를) 구성하십시오.

   **공통 탭**

   **제목:** DXML 사후 프로세스 개시자

   **설명**: 수정/생성된 에셋의 DXML 사후 처리에 대한 슬링 작업을 트리거하는 DXML 사후 처리 개시자 단계입니다.

   **프로세스 탭**

   - **프로세스** 드롭다운에서 **DXML 사후 프로세스 개시자**&#x200B;를 선택합니다.

   - **핸들러 고급** 선택

   - **완료** 선택

1. 변경 내용을 완료한 후 오른쪽 상단의 **동기화**&#x200B;를 클릭합니다. 성공 알림을 받게 됩니다.

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
   - /libs/fmditaor/libsfrom에서 오버레이된 모든 구성 요소는 새 제품 코드와 비교해야 하며, 업데이트는 / 앱에서 오버레이된 파일에서 수행해야 합니다.
   - 제품에서 사용되는 모든 clientlib 카테고리는 변경 사항을 검토해야 합니다. 최신 기능을 가져오려면 재정의된 모든 구성 \(아래 예제\)을 최신 구성과 비교해야 합니다.
   - elementmapping.xml
   - ui\_config.json\(폴더 프로필에 설정되었을 수 있음\)
   - 수정된 `com.adobe.fmdita.config.ConfigManager`

1. damAssetLucene에서 사용자 지정을 추가한 경우 다시 적용해야 할 수 있습니다. 이러한 변경 내용을 적용한 후 reindex를 true로 설정합니다. 이렇게 하면 기존 노드를 맞춤화로 다시 색인화하게 됩니다. 완료되면 색인 재지정 플래그가 다시 false로 설정됩니다. 시스템의 에셋 수에 따라 몇 시간 정도 소요될 수 있습니다.

## Experience Manager Guides 색인을 다시 색인화하는 단계

1. `crx/de`을(를) 열고 인덱스 경로 `/oak:index/guidesAssetProperties`(으)로 이동
2. 인덱스 다시 지정 속성을 `true`(기본적으로 `false`)로 설정하고 **모두 저장**&#x200B;을(를) 클릭합니다.
3. 다시 색인이 완료되면 다시 색인 속성이 `false`(으)로 설정되고 색인 수가 1씩 증가합니다.

   >[!NOTE]
   >
   > 이 작업은 표시되는 데이터의 양에 따라 몇 분 정도 소요될 수 있습니다.
4. 추가 또는 수정된 다른 인덱스에 대해 동일한 단계를 수행합니다. `guidesBulkActivation`, `guidesPeerLinkIndex` 및 `guidesKonnectTemplateIndex`.

## 기존 콘텐츠를 색인화하는 단계



기존 콘텐츠를 색인화하려면 다음 단계를 수행하십시오.

- 올바른 인증을 사용하여 서버 \- `http://<server:port\>/bin/guides/map-find/indexing`에 대한 POST 요청을 실행합니다. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵이 인덱싱됩니다 || 예: `https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`)

- API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 포함된 GET 요청을 동일한 끝점인 `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\(예: ` http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)에 보낼 수 있습니다.

- 작업이 완료되면 위의 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.


>[!NOTE]
>
> 사용자 지정 스키마를 사용하는 경우 **카탈로그 통합** 옵션의 AEM 저장소에 있는 사용자 지정 DTD 및 XSD catalog.xml 파일의 경로를 정의해야 합니다.




## `'fmdita rewriter'` 충돌을 처리하는 단계

Experience Manager Guides에는 교차 맵(서로 다른 두 맵의 주제 간 링크)의 경우 생성되는 링크를 처리하기 위한 [**사용자 지정 sling 재작성기**](../cs-install-guide/conf-output-generation.md#custom-rewriter) 모듈이 있습니다.

코드베이스에 다른 사용자 지정 sling 재작성기가 있는 경우, Experience Manager Guides sling 재작성기는 `'order'` 50을 사용하므로 50보다 큰 `'order'` 값을 사용하십시오.  재정의하려면 50보다 큰 값이 필요합니다. 자세한 내용은 [출력 다시 쓰기 파이프라인](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)을 참조하십시오.

이 업그레이드 중에 `'order'` 값이 1000에서 50으로 변경되었으므로 기존 사용자 지정 재작성기가 있는 경우 `'fmdita-rewriter'`과(와) 병합해야 합니다.


## 버전 5.0.0으로 업그레이드

>[!TIP]
>
> 버전 5.0.0 서비스 팩 2로 업그레이드하는 방법은 현재 버전의 Experience Manager Guides에 따라 다릅니다. 버전 5.0.0 서비스 팩 1 또는 5.0.0을 사용 중인 경우 버전 5.0.0 서비스 팩 2로 직접 업그레이드할 수 있습니다.

>[!NOTE]
>
> 사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

**&#x200B;**&#x200B;사전 요구 사항&#x200B;**&#x200B;**

Experience Manager Guides 5.0.0 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.6.3, 4.6.1, 4.6.0 또는 4.4로 업그레이드하고 해당 설치 단계를 완료했습니다.
1. (선택 사항) 모든 번역 작업을 마감했습니다.
1. **클래스의 로그 수준을** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 변경하고 이 로그를 새 로그 파일(예: `logs/translation_upgrade.log`)에 추가했습니다.


## 버전 5.0.0 설치

1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 5.0.0 버전 패키지를 다운로드합니다.
1. 버전 5.0.0 패키지를 설치합니다.
1. 트리거를 적중하여 번역 맵 업그레이드 작업을 시작하도록 선택할 수 있습니다. 자세한 내용은 [서블릿을 통해 스크립트 트리거 사용](#enable-trigger-of-script-via-a-servlet)을 참조하십시오.

1. 패키지 설치를 완료한 후 로그에서 다음 메시지를 기다립니다.

   `Completed the post deployment setup script`

   위의 메시지는 설치 단계가 모두 완료되었음을 나타냅니다.

   다음 오류 접두사가 발생하면 고객 성공 팀에 보고하십시오.

   - 배포 후 설정 스크립트 오류
   - 번역 맵을 포팅하는 동안 예외 발생
   - v1에서 v2로의 번역 맵을 속성에 대해 포트할 수 없음
1. 필요한 경우 버전 5.0.0과 함께 릴리스된 Oxygen 커넥터 플러그인을 업그레이드하십시오.
1. 패키지를 설치한 후 브라우저 캐시를 지웁니다.

## 버전 5.0.0을 설치한 후

Experience Manager Guides을 설치한 후 새로 설치한 버전에서 설정에 적용할 수 있는 다양한 구성을 병합할 수 있습니다.

>[!NOTE]
>
> dam-update-asset 모델은 맞춤화될 수 있다. 따라서 맞춤화가 수행된 경우 맞춤화와 Experience Manager Guides을 모델의 작업 복사본으로 동기화해야 합니다.

1. **DAM 자산 업데이트 워크플로우 \(변경 후 처리\):**

1. URL 열기:

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM 자산 업데이트 워크플로우**&#x200B;를 선택합니다.
1. **편집**&#x200B;을 클릭합니다.
1. **DXML 사후 프로세스 개시자** 구성 요소가 있는 경우 사용자 지정이 동기화되었는지 확인하십시오.
1. **DXML 사후 프로세스 개시자** 구성 요소가 없으면 다음 단계를 수행하여 해당 구성 요소를 삽입합니다.

1. **구성 요소 삽입** \(프로세스의 마지막 단계로 Experience Manager Guides 후처리를 담당함\)을 클릭합니다.
1. 아래 세부 정보로 **프로세스 단계**&#x200B;을(를) 구성하십시오.

   **공통 탭**

   **제목:** DXML 사후 프로세스 개시자

   **설명**: 수정/생성된 에셋의 DXML 사후 처리에 대한 슬링 작업을 트리거하는 DXML 사후 처리 개시자 단계입니다.

   **프로세스 탭**

   - **프로세스** 드롭다운에서 **DXML 사후 프로세스 개시자**&#x200B;를 선택합니다.

   - **핸들러 고급** 선택

   - **완료** 선택

1. 변경 내용을 완료한 후 오른쪽 상단의 **동기화**&#x200B;를 클릭합니다. 성공 알림을 받게 됩니다.

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
   - /libs/fmditaor/libsfrom에서 오버레이된 모든 구성 요소는 새 제품 코드와 비교해야 하며, 업데이트는 / 앱에서 오버레이된 파일에서 수행해야 합니다.
   - 제품에서 사용되는 모든 clientlib 카테고리는 변경 사항을 검토해야 합니다. 최신 기능을 가져오려면 재정의된 모든 구성 \(아래 예제\)을 최신 구성과 비교해야 합니다.
   - elementmapping.xml
   - ui\_config.json\(폴더 프로필에 설정되었을 수 있음\)
   - 수정된 `com.adobe.fmdita.config.ConfigManager`

1. damAssetLucene에서 사용자 지정을 추가한 경우 다시 적용해야 할 수 있습니다. 이러한 변경 내용을 적용한 후 reindex를 true로 설정합니다. 이렇게 하면 기존 노드를 맞춤화로 다시 색인화하게 됩니다. 완료되면 색인 재지정 플래그가 다시 false로 설정됩니다. 시스템의 에셋 수에 따라 몇 시간 정도 소요될 수 있습니다.

## Experience Manager Guides 색인을 다시 색인화하는 단계

1. `crx/de`을(를) 열고 인덱스 경로 `/oak:index/guidesAssetProperties`(으)로 이동
2. 인덱스 다시 지정 속성을 `true`(기본적으로 `false`)로 설정하고 **모두 저장**&#x200B;을(를) 클릭합니다.
3. 다시 색인이 완료되면 다시 색인 속성이 `false`(으)로 설정되고 색인 수가 1씩 증가합니다.

   >[!NOTE]
   >
   > 이 작업은 표시되는 데이터의 양에 따라 몇 분 정도 소요될 수 있습니다.
4. 추가 또는 수정된 다른 인덱스에 대해 동일한 단계를 수행합니다. `guidesBulkActivation`, `guidesPeerLinkIndex` 및 `guidesKonnectTemplateIndex`.

## 기존 콘텐츠를 색인화하는 단계



기존 콘텐츠를 색인화하려면 다음 단계를 수행하십시오.

- 올바른 인증을 사용하여 서버 \- `http://<server:port\>/bin/guides/map-find/indexing`에 대한 POST 요청을 실행합니다. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵이 인덱싱됩니다 || 예: `https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`)

- API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 포함된 GET 요청을 동일한 끝점인 `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\(예: ` http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)에 보낼 수 있습니다.

- 작업이 완료되면 위의 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.


>[!NOTE]
>
> 사용자 지정 스키마를 사용하는 경우 **카탈로그 통합** 옵션의 AEM 저장소에 있는 사용자 지정 DTD 및 XSD catalog.xml 파일의 경로를 정의해야 합니다.




## `'fmdita rewriter'` 충돌을 처리하는 단계

Experience Manager Guides에는 교차 맵(서로 다른 두 맵의 주제 간 링크)의 경우 생성되는 링크를 처리하기 위한 [**사용자 지정 sling 재작성기**](../cs-install-guide/conf-output-generation.md#custom-rewriter) 모듈이 있습니다.

코드베이스에 다른 사용자 지정 sling 재작성기가 있는 경우, Experience Manager Guides sling 재작성기는 `'order'` 50을 사용하므로 50보다 큰 `'order'` 값을 사용하십시오.  재정의하려면 50보다 큰 값이 필요합니다. 자세한 내용은 [출력 다시 쓰기 파이프라인](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)을 참조하십시오.

이 업그레이드 중에 `'order'` 값이 1000에서 50으로 변경되었으므로 기존 사용자 지정 재작성기가 있는 경우 `'fmdita-rewriter'`과(와) 병합해야 합니다.



## damAssetLucene를 다시 인덱싱하는 절차

안내서가 있는 damAssetLucene에 대한 색인 정의가 업데이트되었습니다. 5.0.0 버전으로 업그레이드한 후 damAssetLucene을 다시 인덱싱하려면 [이 문서](https://experienceleague.adobe.com/ko/docs/experience-cloud-kcs/kbarticles/ka-16460)를 참조하십시오.

>[!NOTE]
>
> 이 문서에 따라 저장 작업을 통해 두 속성(/oak:index/damAssetLucene의 경우 reindex=true 및 reindex-async=true)이 동시에 업데이트되는지 확인하십시오.

## 버전 5.1.0으로 업그레이드

>[!IMPORTANT]
>
> 현재 AEM 6.5를 사용 중이며 AEM 6.5 LTS로 이동할 계획이라면 Experience Manager Guides 5.1.0 업그레이드를 진행하기 전에 먼저 AEM 업그레이드를 완료해야 합니다. 자세한 내용은 [Adobe Experience Manager(AEM) 6.5 LTS로 업그레이드](https://experienceleague.adobe.com/ko/docs/experience-manager-65-lts/content/implementing/deploying/upgrading/upgrade)를 참조하십시오.

**사전 요구 사항**

>[!NOTE]
>
>5.1.0 서비스 팩 1로 업그레이드하는 경우 Experience Manager Guides 버전 5.1.0에 있어야 합니다.

Experience Manager Guides 5.1.0 업그레이드 프로세스를 시작하기 전에 다음을 확인하십시오.

1. Experience Manager Guides 버전 4.6.3, 4.6.4, 5.0.0 또는 5.0.0 서비스 팩 1로 업그레이드하고 각 설치 단계를 완료했습니다.
1. (선택 사항) 모든 번역 작업을 마감했습니다.
1. **클래스의 로그 수준을** INFO`com.adobe.fmdita.translationservices.TranslationMapUpgradeScript`(으)로 변경하고 이 로그를 새 로그 파일(예: `logs/translation_upgrade.log`)에 추가했습니다.

>[!NOTE]
>
> 사후 처리 및 인덱싱에는 몇 시간이 걸릴 수 있습니다. 사용량이 적은 시간 동안 업그레이드 프로세스를 시작하는 것이 좋습니다.

## 버전 5.1.0 설치

1. [Adobe 소프트웨어 배포 포털](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html)에서 5.1.0 버전 패키지를 다운로드합니다.
1. 버전 5.1.0 패키지를 설치합니다.
1. 트리거를 적중하여 번역 맵 업그레이드 작업을 시작하도록 선택할 수 있습니다. 자세한 내용은 [서블릿을 통해 스크립트 트리거 사용](#enable-trigger-of-script-via-a-servlet)을 참조하십시오.

1. 패키지 설치를 완료한 후 로그에서 다음 메시지를 기다립니다.

   `Completed the post deployment setup script`

   위의 메시지는 설치 단계가 모두 완료되었음을 나타냅니다.

   다음 오류 접두사가 발생하면 고객 성공 팀에 보고하십시오.

   - 배포 후 설정 스크립트 오류
   - 번역 맵을 포팅하는 동안 예외 발생
   - v1에서 v2로의 번역 맵을 속성에 대해 포트할 수 없음
1. 필요한 경우 버전 5.1.0과 함께 릴리스된 Oxygen 커넥터 플러그인을 업그레이드하십시오.
1. 패키지를 설치한 후 브라우저 캐시를 지웁니다.

## 버전 5.1.0 설치 후

Experience Manager Guides을 설치한 후 새로 설치한 버전에서 설정에 적용할 수 있는 다양한 구성을 병합할 수 있습니다.

>[!NOTE]
>
> dam-update-asset 모델은 맞춤화될 수 있다. 따라서 맞춤화가 수행된 경우 맞춤화와 Experience Manager Guides을 모델의 작업 복사본으로 동기화해야 합니다.

1. **DAM 자산 업데이트 워크플로우 \(변경 후 처리\):**

1. URL 열기:

   ```
   http://localhost:4502/libs/cq/workflow/admin/console/content/models.html 
   ```

1. **DAM 자산 업데이트 워크플로우**&#x200B;를 선택합니다.
1. **편집**&#x200B;을 선택합니다.
1. **DXML 사후 프로세스 개시자** 구성 요소가 있는 경우 사용자 지정이 동기화되었는지 확인하십시오.
1. **DXML 사후 프로세스 개시자** 구성 요소가 없으면 다음 단계를 수행하여 해당 구성 요소를 삽입합니다.

1. **구성 요소 삽입** \(프로세스의 마지막 단계로 Experience Manager Guides 후처리를 담당함\)을 선택합니다.
1. 아래 세부 정보로 **프로세스 단계**&#x200B;을(를) 구성하십시오.

   **공통 탭**

   **제목:** DXML 사후 프로세스 개시자

   **설명**: 수정/생성된 에셋의 DXML 사후 처리에 대한 슬링 작업을 트리거하는 DXML 사후 처리 개시자 단계입니다.

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
   - /libs/fmditaor/libsfrom에서 오버레이된 모든 구성 요소는 새 제품 코드와 비교해야 하며, 업데이트는 / 앱에서 오버레이된 파일에서 수행해야 합니다.
   - 제품에서 사용되는 모든 clientlib 카테고리는 변경 사항을 검토해야 합니다. 최신 기능을 가져오려면 재정의된 모든 구성 \(아래 예제\)을 최신 구성과 비교해야 합니다.
   - elementmapping.xml
   - ui\_config.json\(폴더 프로필에 설정되었을 수 있음\)
   - 수정된 `com.adobe.fmdita.config.ConfigManager`

1. damAssetLucene에서 사용자 지정을 추가한 경우 다시 적용해야 할 수 있습니다. 이러한 변경 내용을 적용한 후 reindex를 true로 설정합니다. 이렇게 하면 기존 노드를 맞춤화로 다시 색인화하게 됩니다. 완료되면 색인 재지정 플래그가 다시 false로 설정됩니다. 시스템의 에셋 수에 따라 몇 시간 정도 소요될 수 있습니다.

## Experience Manager Guides 색인을 다시 색인화하는 단계

1. `crx/de`을(를) 열고 인덱스 경로 `/oak:index/guidesAssetProperties`(으)로 이동
2. 인덱스 다시 지정 속성을 `true`(기본적으로 `false`)로 설정하고 **모두 저장**&#x200B;을(를) 클릭합니다.
3. 다시 색인이 완료되면 다시 색인 속성이 `false`(으)로 설정되고 색인 수가 1씩 증가합니다.

   >[!NOTE]
   >
   > 이 작업은 표시되는 데이터의 양에 따라 몇 분 정도 소요될 수 있습니다.
4. 추가 또는 수정된 다른 인덱스에 대해 동일한 단계를 수행합니다. `guidesBulkActivation`, `guidesPeerLinkIndex` 및 `guidesKonnectTemplateIndex`.

## 기존 콘텐츠를 색인화하는 단계



기존 콘텐츠를 색인화하려면 다음 단계를 수행하십시오.

- 올바른 인증을 사용하여 서버 \- `http://<server:port\>/bin/guides/map-find/indexing`에 대한 POST 요청을 실행합니다. (선택 사항: 맵의 특정 경로를 전달하여 인덱싱할 수 있습니다. 기본적으로 모든 맵이 인덱싱됩니다 || 예: `https://<Server:port\>/bin/guides/map-find/indexing?paths=<map\_path\_in\_repository\>`)

- API는 jobId를 반환합니다. 작업 상태를 확인하려면 작업 ID가 포함된 GET 요청을 동일한 끝점인 `http://<server:port\>/bin/guides/map-find/indexing?jobId=\{jobId\}`\(예: ` http://localhost:8080/bin/guides/map-find/indexing?jobId=2022/9/15/7/27/7dfa1271-981e-4617-b5a4-c18379f11c42_678`)에 보낼 수 있습니다.

- 작업이 완료되면 위의 GET 요청은 성공으로 응답하고 맵이 실패한 경우 언급됩니다. 인덱싱된 맵은 서버 로그에서 확인할 수 있습니다.


>[!NOTE]
>
> 사용자 지정 스키마를 사용하는 경우 **카탈로그 통합** 옵션의 AEM 저장소에 있는 사용자 지정 DTD 및 XSD catalog.xml 파일의 경로를 정의해야 합니다.




## `'fmdita rewriter'` 충돌을 처리하는 단계

Experience Manager Guides에는 교차 맵(서로 다른 두 맵의 주제 간 링크)의 경우 생성되는 링크를 처리하기 위한 [**사용자 지정 sling 재작성기**](../cs-install-guide/conf-output-generation.md#custom-rewriter) 모듈이 있습니다.

코드베이스에 다른 사용자 지정 sling 재작성기가 있는 경우, Experience Manager Guides sling 재작성기는 `'order'` 50을 사용하므로 50보다 큰 `'order'` 값을 사용하십시오.  재정의하려면 50보다 큰 값이 필요합니다. 자세한 내용은 [출력 다시 쓰기 파이프라인](https://sling.apache.org/documentation/bundles/output-rewriting-pipelines-org-apache-sling-rewriter.html)을 참조하십시오.

이 업그레이드 중에 `'order'` 값이 1000에서 50으로 변경되었으므로 기존 사용자 지정 재작성기가 있는 경우 `'fmdita-rewriter'`과(와) 병합해야 합니다.



## damAssetLucene를 다시 인덱싱하는 절차

안내서가 있는 damAssetLucene에 대한 색인 정의가 업데이트되었습니다. 5.1.0 버전으로 업그레이드한 후 damAssetLucene을 다시 인덱싱하려면 [이 문서](https://experienceleague.adobe.com/ko/docs/experience-cloud-kcs/kbarticles/ka-16460)를 참조하십시오.

>[!NOTE]
>
> 이 문서에 따라 저장 작업을 통해 두 속성(/oak:index/damAssetLucene의 경우 reindex=true 및 reindex-async=true)이 동시에 업데이트되는지 확인하십시오.



**상위 항목:** [다운로드 및 설치](download-install.md)
