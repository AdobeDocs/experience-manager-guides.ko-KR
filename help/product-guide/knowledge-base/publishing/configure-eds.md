---
title: Experience Manager Guides 및 Edge Delivery Services(Beta)
description: Edge Delivery Services(Beta)가 Experience Manager Guides의 작성 및 게시 가능성을 확장하는 방법을 이해합니다.
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 7ca2eeb0356f3c82a8d970f291006fc6d19aca23
workflow-type: tm+mt
source-wordcount: '1532'
ht-degree: 0%

---

# Experience Manager Guides 및 Edge Delivery Services(Beta)

Adobe Experience Manager Guides을 사용하면 전용 GitHub 기반 게시 프로필을 통해 DITA 콘텐츠를 현재 *Beta*&#x200B;에서 사용 가능한 Edge Delivery Services(EDS)에 직접 게시할 수 있습니다. 이 기능을 통해 조직은 Experience Manager Guides에서 DITA 기반 작성 워크플로를 유지하면서 고성능 반응형 설명서 경험을 제공할 수 있습니다.

Adobe Experience Manager에서 EDS를 사용하는 방법에 대한 자세한 내용은 [Edge Delivery Services 개요](https://experienceleague.adobe.com/ko/docs/experience-manager-cloud-service/content/edge-delivery/overview)를 참조하십시오.

Experience Manager Guides에서 EDS(Beta)로 게시를 활성화하려면 GitHub 및 Experience Manager Guides에서 일련의 구성 단계를 완료해야 합니다. 아래 섹션에서는 각 단계를 순서대로 요약하고 전체 게시 워크플로우에서 함께 작동하는 방식을 설명합니다.

1. [EDS(Beta)용 GitHub 설정 및 구성](#set-up-and-configure-github-for-eds-beta)
2. [Experience Manager Guides에서 EDS(Beta)에 대한 게시 프로필 만들기 및 구성](#create-and-configure-a-publish-profile-for-eds-beta-in-experience-manager)
3. [EDS 블록을 사용하여 출력 사용자 지정](#customize-output-using-eds-blocks)

빠른 비디오 연습이 필요하면 [AEM Guides에서 게시](https://experienceleague.adobe.com/en/docs/experience-manager-guides/using/knowledge-base/expert-session/publishing-in-aem-guides-aug25)를 참조하십시오.



## EDS(Beta)용 GitHub 설정 및 구성

이 섹션에서는 EDS(Beta)에 사용할 GitHub를 설정하고 구성하는 방법에 대해 설명합니다. 이 안내서에서는 Adobe 보일러플레이트를 사용하여 저장소를 생성하고, AEM 코드 동기화를 통해 Adobe Experience Manager에 GitHub를 연결하고, 필요한 GitHub 및 OAuth 애플리케이션을 구성하고, 콘텐츠를 게시하는 데 사용되는 저장소 마운트 지점을 정의하는 내용을 다룹니다.

### EDS(Beta)용 GitHub 저장소 만들기

EDS(Beta)에는 사전 정의된 구조의 GitHub 저장소가 필요합니다. Adobe은 Experience Manager Guides 사용자를 위해 특별히 설계된 공식 보일러판 저장소를 제공합니다.

저장소를 생성하려면 다음 단계를 수행하십시오.

1. Experience Manager Guides 표준 템플릿 저장소 [`aem-guides-boilerplate`](https://github.com/adobe/aem-guides-boilerplate)을(를) 엽니다.
   ![](assets/eds-boilerplate-template.png){align="left"}

2. 이 템플릿을 사용하여 새 저장소를 만듭니다. [템플릿에서 저장소 만들기](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)에 대해 알아봅니다. EDS에서 액세스할 수 있도록 저장소 가시성이 *공개*(으)로 설정되어 있는지 확인하십시오.

   ![](assets/eds-create-new-repo.png){align="left"}

이제 저장소가 만들어지고 보일러판 템플릿 구조에 맞게 조정됩니다.

![](assets/eds-repo-created-github-view.png){align="left"}

### AEM 코드 동기화를 통해 GitHub를 Adobe에 연결

Adobe Experience Manager은 **AEM 코드 동기화**&#x200B;라는 GitHub 애플리케이션을 사용하여 콘텐츠를 Experience Manager Guides에서 GitHub로 푸시합니다.

*AEM 코드 동기화* 응용 프로그램을 설치하고 구성하려면 다음 단계를 수행하십시오.

1. [AEM 코드 동기화](https://github.com/apps/aem-code-sync) 페이지로 이동하고 **설치**&#x200B;를 선택합니다.
2. *AEM 코드 동기화*&#x200B;는 저장소 변경 내용을 모니터링하고 업데이트가 GitHub로 올바르게 푸시되도록 합니다.

   >[!NOTE]
   >
   > 애플리케이션을 설치하는 동안 저장소를 소유하는 동일한 GitHub 계정을 사용해야 합니다.

   ![](assets/eds-aem-code-sync-page.png){align="left"}
3. 다음 페이지에서 만든 저장소에 대한 액세스 권한을 부여합니다. 이렇게 하려면 **저장소만 선택** 옵션을 선택한 다음 드롭다운에서 저장소를 선택합니다.

   ![](assets/eds-aem-code-sync-install-authorize.png){width="350" align="left"}
4. **설치 및 승인**&#x200B;을 선택합니다.

GitHub 설정 페이지로 리디렉션되어 *AEM 코드 동기화* 응용 프로그램이 성공적으로 등록되었습니다. 이 페이지에서 웹 사이트의 미리보기 및 라이브 URL을 저장할 수도 있습니다.

![](assets/eds-aem-code-sync-registered.png){align="left"}

### 새 GitHub 앱 만들기

1. GitHub에서 왼쪽 사이드바로 이동하여 **개발자 설정**&#x200B;을 선택합니다.
2. 왼쪽 사이드바에서 **GitHub 앱**&#x200B;을 선택합니다.
3. **새 GitHub 앱**&#x200B;을 선택합니다.

   ![](assets/eds-new-github-app.png){width="650" align="left"}
4. **새 GitHub 앱 등록** 페이지에서 다음 세부 정보를 제공합니다.
   - **GitHub 앱 이름**: 앱 이름을 입력하십시오. 예를 들어 `USERNAME-eds-app`(여기서 USERNAME은 GitHub 사용자 이름).
   - **홈 페이지 URL**: Experience Manager Guides 인스턴스의 URL을 입력하십시오.

     샘플 URL(형식): `https://<aem-author-url>/libs/fmdita/clientlibs/xmleditor/page.html`

     샘플 URL: `https://author-p16602-e335172-cmstg.adobeaemcloud.com/libs/fmdita/clientlibs/xmleditor/page.html`
   - **콜백 URL**: 홈 페이지 URL과 동일합니다.
   - **Webhook URL**: 이 옵션을 사용하지 않도록 설정합니다.
   - **저장소 권한**: **작업, 관리 및 증명**&#x200B;에 대해 *읽기 및 쓰기* 권한을 설정합니다.
5. **GitHub 앱 만들기**&#x200B;를 선택합니다.

이제 앱이 준비되었습니다. GitHub 앱의 **설정** 페이지로 리디렉션됩니다.

![](assets/eds-github-app-registered-page.png){align="left"}

### 새 OAuth 앱 만들기

Experience Manager Guides에서 EDS(Beta) 게시 프로필을 만드는 동안 사용자를 인증하려면 OAuth 앱이 필요합니다. *클라이언트 ID* 및 *클라이언트 암호*&#x200B;를 사용하여 보안 로그인 흐름을 사용하도록 설정합니다.

새 OAuth 앱을 만들려면 다음 단계를 수행하십시오.

1. GitHub에서 왼쪽 사이드바로 이동하여 **개발자 설정**&#x200B;을 선택합니다.
2. 왼쪽 사이드바에서 **OAuth 앱**&#x200B;을 선택합니다.
3. **새 OAuth 앱**&#x200B;을 선택합니다.

   ![](assets/eds-new-oauth-app.png){width="650" align="left"}
4. 다음의 필수 세부 정보를 제공하여 애플리케이션을 등록합니다.
   - **응용 프로그램 이름**: EDS 저장소의 이름을 입력하십시오.
   - **홈 페이지 URL**: Experience Manager Guides 인스턴스의 URL을 입력하십시오. (샘플 URL 형식의 경우 [새 GitHub 앱 만들기](#create-a-new-github-app) 섹션의 4단계를 참조하십시오.)
   - **인증 콜백 URL**: 홈 페이지 URL과 동일
5. **장치 흐름 활성화** 옵션을 선택한 다음 **응용 프로그램 등록**&#x200B;을 선택하여 등록을 완료합니다.

   ![](assets/eds-new-github-app-register.png){width="650" align="left"}

이제 앱이 준비되었습니다. *클라이언트 ID*&#x200B;을(를) 메모하십시오. Experience Manager Guides에서 게시 프로필을 구성하는 동안 지금 또는 나중에 최대 5개의 *클라이언트 암호*&#x200B;를 생성할 수 있습니다.

![](assets/eds-new-oauth-app-page.png){align="left"}


### EDS(Beta) 저장소에서 마운트 지점 URL 구성

EDS(Beta)는 *파일의* mountpoint`fstab.yaml` URL로 정의된 GitHub 저장소 경로에서 콘텐츠를 읽습니다.

`fstab.yaml` 파일에서 탑재 지점 URL을 구성하려면 다음을 수행하십시오.

1. 리포지토리에서 `fstab.yaml` 파일을 열고 다음을 업데이트합니다.
   - `your-user-name`
   - `your-repo-name`

   >[!NOTE]
   >
   > 탑재 지점 URL에서 `main`은(는) 콘텐츠를 게시하려는 분기를 나타내며, `docs`은(는) 작업 중인 EDS(Beta) 저장소의 루트 폴더를 나타냅니다. GitHub에서 분기 이름을 변경하려면 *mountpoint* URL(`fstab.yaml` 파일)에서 동일한 분기 이름 및 Experience Manager Guides의 해당 EDS 게시 프로필을 업데이트해야 합니다.

   ![](assets/eds-fstab-yaml-file.png){width="650" align="left"}
2. **변경 내용 커밋**&#x200B;을 선택하고 커밋 세부 정보를 입력한 다음 확인합니다.
3. [개발자 설정](https://github.com/settings/apps)&#x200B;(으)로 돌아가서 앱을 찾은 다음 **편집**&#x200B;을 선택합니다.

   ![](assets/eds-edit-github-app.png){width="650" align="left"}
4. **앱 설치** 페이지로 이동하여 **설치**&#x200B;를 선택합니다.

   ![](assets/eds-install-eds-app.png){width="650" align="left"}
5. [AEM 코드 동기화를 통해 GitHub를 Adobe에 연결](#connect-github-to-adobe-via-aem-code-sync) 섹션에서 2단계와 3단계를 반복하여 리포지토리를 인증합니다.

## Experience Manager에서 EDS(Beta)에 대한 게시 프로필 만들기 및 구성

아래 섹션에서는 각 단계를 순차적으로 간략히 설명하고 Experience Manager Guides에서 EDS(Beta) 게시 프로필을 설정하고, 출력 사전 설정을 구성하고, EDS(Beta)를 사용하여 출력을 생성하는 방법에 대해 설명합니다.

### EDS(Beta) 게시 프로필 만들기

1. **[Workspace 설정](/help/product-guide/cs-install-guide/workspace-settings.md)** **>** **프로필 게시**&#x200B;로 이동합니다.
2. **+** 아이콘을 선택하여 새 게시 프로필을 만들고 다음 세부 정보를 제공합니다.
   - **서버 유형**: 드롭다운에서 **GitHub Edge Delivery Services(Beta)**&#x200B;을(를) 선택합니다.
   - **이름**: 이 프로필의 이름을 입력하십시오.
   - **저장소 이름**: 상용구에서 만든 GitHub 저장소 이름을 사용합니다.
   - **사용자 이름**: GitHub 사용자 이름을 입력하십시오.
   - **분기 주**: 주(기본값)로 설정합니다.
   - **루트 폴더**: docs(기본값)로 설정합니다.
   - **클라이언트 ID 및 클라이언트 암호**: GitHub 앱에서 가져옵니다(자세한 내용은 [새 OAuth 앱 만들기](#create-a-new-oauth-app) 섹션 참조).
3. 인증하려면 **로그인**&#x200B;을 선택하십시오.

   ![](assets/eds-publish-profile.png){width="650" align="left"}
4. 인증에 성공하면 **저장**&#x200B;을 선택합니다.

이제 EDS(Beta) 게시 프로필이 구성되었습니다.

### EDS(Beta)용 출력 사전 설정 만들기 및 출력 생성

1. 맵 콘솔에서 맵을 엽니다.
2. **출력 사전 설정** 탭에서 **+**&#x200B;을(를) 선택하여 새 출력 사전 설정을 만듭니다.
3. **새 출력 사전 설정** 대화 상자에서 다음 세부 정보를 제공합니다.
   - **유형**: **Edge Delivery 서비스(Beta) 선택**
   - **이름**: 이 사전 설정의 이름을 입력하십시오.
4. **추가**&#x200B;를 선택합니다.

   ![](assets/eds-output-preset.png){width="650" align="left"}
5. 새로 만든 EDS(Beta) 출력 사전 설정을 열고 **구성** 탭으로 이동합니다.
   - 이전 단계에서 만든 게시 프로필을 선택합니다.
   - **Push to live**&#x200B;를 사용하도록 설정하십시오.

   **Push to live**&#x200B;을(를) 사용하면 생성된 출력이 GitHub에 커밋되고 해당 업데이트가 라이브 웹 사이트로 즉시 전파됩니다.

   ![](assets/eds-output-preset-config-tab.png){width="650" align="left"}

6. **저장**&#x200B;을 선택한 다음 **출력 생성**&#x200B;을 선택하십시오.

>[!NOTE]
>
> 생성된 출력은 EDS(Beta) 저장소의 **docs** 폴더에 저장됩니다.

이제 EDS(Beta) 출력이 생성됩니다. 컨텐츠가 깔끔하고 응답형 레이아웃으로 표시됩니다. 여기에는 페이지 제목, 탐색 표시, 본문 컨텐츠 및 주제에 사용되는 모든 블록과 같은 일반 요소가 포함됩니다. 왼쪽의 목차(맵에서 생성됨)는 주제 간을 탐색하는 데 도움이 되며 오른쪽의 미니 목차는 현재 페이지의 섹션을 강조 표시합니다. 전체 출력은 완전히 응답하므로 장치 간에 최적화되고 일관된 읽기 환경이 보장됩니다.

![](assets/eds-site-output.png){align="left"}

## EDS 블록을 사용하여 출력 사용자 지정

EDS는 `blocks`을(를) 사용하여 콘텐츠의 다양한 부분을 어떻게 스타일링하고 표시할지 제어합니다. 기존 블록을 수정하거나 사용자 지정 블록을 만들 수 있습니다.

아래 설명된 예제는 기존 블록을 사용자 정의하고 새 블록을 만들어 Experience Manager Guides의 최종 EDS(Beta) 출력 스타일을 지정하는 방법을 안내합니다.

### 이동 경로 블록을 사용자 정의하여 텍스트 색상 업데이트

이동 경로는 사용자가 설명서에서 현재 위치를 이해하는 데 도움이 되도록 페이지 간에 사용됩니다. 이 블록은 웹 사이트 전체에 일관되게 표시되므로 스타일을 업데이트하면 통합 디자인 업데이트를 수행할 수 있습니다.

이동 경로 블록을 사용자 정의하여 텍스트 색상을 업데이트하려면 다음 단계를 수행하십시오.

1. GitHub 저장소로 이동하여 `blocks` 폴더를 엽니다.
2. **탐색 표시** 블록을 선택하십시오.

   ![](assets/eds-breadcrumbs.png){width="650" align="left"}
3. `css` 파일을 열고 텍스트 색을 업데이트합니다.
4. GitHub에 변경 사항을 커밋합니다.
5. 업데이트를 보려면 라이브 웹 사이트를 새로 고침하십시오.

### EDS(Beta) 스크립트를 업데이트하여 게시된 출력에서 사용자 지정 요소를 만듭니다.

콘텐츠의 특정 부분만 스타일을 지정할 수도 있습니다. 사용자 지정 블록을 사용하여 이를 수행하려면 다음 단계를 수행하십시오.

1. 주제 파일을 열고 태그 요소 내의 텍스트를 선택합니다.

   다음 스크린샷에서는 `example` 태그 내의 콘텐츠가 선택됩니다.
   ![](assets/eds-example-tag-org-output.png){width="650" align="left"}
2. `example` 태그 내의 텍스트를 구성하려면 다음을 수행합니다.
   - **콘텐츠 속성**(으)로 이동합니다.
   - `outputclass` 특성을 추가합니다.
   - 값을 `example eds-force-block`(으)로 설정합니다.
   - **추가**를 선택합니다.
     ![](assets/eds-example-tag.png){width="650" align="left"}
3. 출력을 저장하고 재생성합니다.
4. `outputclass` 디렉터리 내에서 `blocks`과(와) 같은 이름의 새 폴더를 만듭니다. [저장소에 파일 추가](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-using-the-command-line)에 대해 알아봅니다.

   ![](assets/eds-example-folder.png){width="650" align="left"}
5. 필요한 `css` 및 선택적 `js` 파일을 추가합니다.

   ![](assets/eds-example-folder-subfolders.png){width="650" align="left"}
6. 변경 내용을 커밋하고 출력을 재생성합니다.

이제 선택한 컨텐츠에 블록에 정의된 사용자 지정 스타일이 표시됩니다.

![](assets/eds-example-output.png){width="650" align="left"}