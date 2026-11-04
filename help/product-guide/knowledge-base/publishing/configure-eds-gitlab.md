---
title: Edge Delivery Services용 GitLab 설정 및 구성
description: GitLab 저장소를 구성하고, 토큰, Cloud Manager에 액세스하고, Git을 가져와서 Experience Manager Guides에서 Edge Delivery Services으로 콘텐츠를 게시하는 방법을 알아봅니다.
feature: Output Generation
role: Admin
level: Experienced
source-git-commit: 380089cbcfc56b23a9cb494d49c0e39e1813eabd
workflow-type: tm+mt
source-wordcount: '1217'
ht-degree: 3%
---

# Edge Delivery Services용 GitLab 설정 및 구성

GitLab을 사용하여 Experience Manager Guides에서 Edge Delivery Services(EDS)로 콘텐츠를 게시하려면 Cloud Manager의 *Bring Your Own Git*(BYOG) 기능을 통해 GitLab 저장소를 EDS 사이트에 연결합니다. 이 문서에는 단계가 순서대로 나열되어 있습니다. 각 단계에 대한 자세한 내용은 연결된 설명서를 참조하십시오.

## 작동 방식

- **GitHub 저장소**&#x200B;는 AEM 코드 동기화 앱을 통해 EDS 사이트를 만듭니다.
- **GitLab 저장소**&#x200B;는 Experience Manager Guides에서 게시한 콘텐츠를 저장합니다.
- **Cloud Manager**&#x200B;은(는) GitLab 푸시 이벤트(webhook)를 수신하고 이를 EDS 사이트에 동기화하여 두 이벤트를 연결합니다.

## 사전 요구 사항

- GitHub 및 GitLab(GitLab.com 또는 자체 호스팅)에 액세스하여 저장소 및 토큰을 생성합니다.
- 저장소(배포 관리자 또는 비즈니스 소유자)를 추가할 수 있는 역할을 가진 Cloud Manager에 액세스합니다.
- Cloud Manager API 통합을 만들려면 Adobe 조직의 시스템 관리자 또는 API 개발자 역할입니다.
- 구성 서비스에 등록된 `aem.live` 조직입니다. 자세한 내용은 [구성 서비스 설정](https://www.aem.live/docs/config-service-setup)을 참조하세요.

## Edge Delivery Services용 GitLab 구성

Edge Delivery Services에서 사용할 GitLab을 구성하려면 지정된 시퀀스에서 다음 단계를 수행하여 적절한 설정 및 통합을 보장합니다.

### &#x200B;1. GitHub를 사용하여 EDS 사이트 만들기

AEM Guides 보일러판에서 GitHub 리포지토리를 만들고 AEM 코드 동기화 앱을 설치합니다. 나중에 생성된 **Live URL**(`https://<branch>--<github-repo>--<github-username>.aem.live`)을(를) 저장합니다.

단계는 [EDS용 GitHub 저장소 만들기](./configure-eds.md#create-a-github-repository-for-eds) 및 [AEM 코드 동기화를 통해 GitHub를 Adobe에 연결](./configure-eds.md#connect-github-to-adobe-via-aem-code-sync)을 참조하세요.

>[!IMPORTANT]
>
> Cloud Manager의 원클릭 옵션을 사용하여 EDS 사이트를 만들지 마십시오. 이러한 방식으로 생성된 사이트는 이후 단계에 필요한 관리자 권한을 제공하지 않습니다. [Edge Delivery Services 사이트 준비](https://www.aem.live/developer/byo-git#1.-prepare-your-edge-delivery-services-site)에서 자세히 알아보세요.

### &#x200B;2. GitLab 저장소 만들기

동일한 AEM Guides 상용구에서 별도의 GitLab 저장소(예: `my-eds-gitlab`)를 만듭니다. Experience Manager Guides은 생성된 출력을 이 저장소에 게시합니다. EDS에는 `main` 분기가 필요합니다.

저장소를 만들려면 빈 프로젝트를 만들고 [aem-guides-boilerplate](https://github.com/adobe/aem-guides-boilerplate)의 내용을 해당 프로젝트에 푸시하거나 해당 보일러플레이트를 새 프로젝트로 가져옵니다. 단계는 GitLab 설명서에서 [프로젝트 만들기](https://docs.gitlab.com/user/project/) 및 [GitHub에서 GitLab으로 프로젝트 가져오기](https://docs.gitlab.com/user/project/import/github/)를 참조하십시오.

### &#x200B;3. 마운트 지점 URL 구성

GitHub 리포지토리에서 콘텐츠 소스가 GitLab 리포지토리를 가리키도록 `fstab.yaml`을(를) 업데이트한 다음 변경 내용을 `main`에 커밋합니다.

```text
https://<worker URL>/gitlab/<git acc domain>/<git username>/<git repo>/main/docs
```

| 매개변수 | 설명 |
|---|---|
| `<worker URL>` | Adobe에서 제공한 작업자 노드 URL. |
| `<git acc domain>` | GitLab 도메인(예: `gitlab.com`) 또는 자체 호스팅 도메인. |
| `<git username>` | GitLab 사용자 이름. |
| `<git repo>` | GitLab 저장소의 이름입니다. |
| `main` / `docs` | 분기 및 루트 폴더. Experience Manager Guides 기본값 |

### &#x200B;4. GitLab 액세스 토큰 만들기

다음에 필요한 액세스 토큰 만들기:

- **Cloud Manager**: 리포지토리의 유효성을 검사하고 액세스합니다. 자세한 내용은 [Cloud Manager에서 외부 저장소 추가](https://experienceleague.adobe.com/ko/docs/experience-manager-cloud-manager/content/managing-code/external-repositories)를 참조하세요.
- 게시된 출력을 커밋할 **Experience Manager Guides 게시 프로필**. **개발자** 역할 및 `api` 범위를 사용하여 GitLab 프로젝트 액세스 토큰을 만듭니다. 자세한 내용은 [GitLab 설명서](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html)를 참조하세요.

>[!NOTE]
>
> 토큰이 만료되기 전에 갱신합니다. 게시 프로필의 토큰이 만료된 경우 게시가 실패합니다. Cloud Manager에서 사용하는 토큰을 업데이트하려면 [외부 저장소에 대한 액세스 토큰 관리](https://experienceleague.adobe.com/ko/docs/experience-manager-cloud-manager/content/managing-code/manage-access-tokens)를 참조하십시오.

### &#x200B;5. Cloud Manager에 GitLab 저장소 추가

Cloud Manager에서 **저장소** > **저장소 추가**(으)로 이동하고 **개인 저장소**&#x200B;를 선택한 다음 액세스 토큰을 사용하여 소유권을 확인합니다. 저장소 상태가 **준비**&#x200B;가 될 때까지 기다리십시오. BYOG 옵션은 최소 하나 이상의 외부 저장소가 준비된 후에만 사용할 수 있습니다.

단계는 [Cloud Manager에서 외부 저장소 추가](https://experienceleague.adobe.com/ko/docs/experience-manager-cloud-manager/content/managing-code/external-repositories)를 참조하십시오.

### &#x200B;6. Cloud Manager API 키 생성

Adobe Developer Console(**Cloud Manager** API, **OAuth 서버 간**)에서 API 통합을 만들고 **클라이언트 ID(API 키)**&#x200B;를 복사합니다.

단계는 [API 통합 프로젝트 만들기](https://developer.adobe.com/experience-cloud/cloud-manager/guides/getting-started/create-api-integration)를 참조하십시오.

### &#x200B;7. GitLab 웹후크 구성

Cloud Manager에서 리포지토리에 대해 **Webhook 구성**&#x200B;을(를) 선택하고 **Webhook URL** 및 **암호**&#x200B;를 복사합니다. API 키를 URL(`<webhook URL>&api-key=<CLIENT_ID>`)에 추가합니다. GitLab에서 **설정** > **웹후크**(으)로 이동하여 URL 및 암호를 추가하고 `main` 분기를 선택한 다음 **푸시 이벤트**&#x200B;를 사용하도록 설정합니다.

자세한 내용은 [Cloud Manager에서 외부 저장소 구성](https://www.aem.live/developer/byo-git#2.-configure-your-external-repository-in-cloud-manager)을 참조하세요.

### &#x200B;8. Cloud Manager에 EDS 사이트 추가

Cloud Manager에서 **Edge Delivery** > **Edge Delivery 사이트 추가**(으)로 이동하여 1단계에서 저장된 Live URL을 입력합니다. 소유권 확인을 완료합니다.

단계는 [Edge Delivery 사이트 추가](https://experienceleague.adobe.com/ko/docs/experience-manager-cloud-service/content/implementing/using-cloud-manager/edge-delivery-sites/add-edge-delivery-site)를 참조하십시오.

### &#x200B;9. Bring Your Own Git 을 사용하여 저장소 연결

Cloud Manager의 EDS 사이트에서 **Bring Your Own Git (BYOG)**&#x200B;을(를) 선택하고 GitLab 저장소를 선택한 다음 확인합니다. 생성된 암호를 복사하여 안전하게 저장합니다. 한 번만 표시되며, 사이트를 다시 구성하는 경우 새 비밀이 생성됩니다.

자세한 내용은 [Cloud Manager에서 Edge Delivery 사이트 구성](https://www.aem.live/developer/byo-git#3.-configure-your-edge-delivery-site-in-cloud-manager)을 참조하세요.

### &#x200B;10. Cloud Manager을 사용하도록 EDS 사이트 구성

Webhook URL에서 **프로그램 ID**(`/program/<PROGRAM_ID>/`) 및 **저장소 ID**(`/repo/<REPO_ID>/`)를 사용하여 EDS 사이트의 코드 소스를 Cloud Manager 저장소로 설정합니다. 그런 다음 9단계의 암호를 사용하여 정확히 `cm-byog`이라는 암호를 만드십시오.

관리 API 호출의 경우 [Cloud Manager을 사용하도록 AEM 사이트 구성](https://www.aem.live/developer/byo-git#4.-configure-your-aem-site-to-use-cloud-manager)을 확인하십시오.

### &#x200B;11. 동기화 및 확인

Cloud Manager의 사이트 메뉴에서 **동기화 코드**&#x200B;을(를) 선택하고 `main` 분기를 선택합니다. `https://main--<site>--<org>.aem.page`을(를) 열어 사이트를 확인합니다.

자세한 내용은 [첫 번째 동기화 트리거](https://www.aem.live/developer/byo-git#5.-trigger-your-first-sync) 및 [AEM 사이트 확인](https://www.aem.live/developer/byo-git#6.-verify-your-aem-site)을 참조하세요.

### &#x200B;12. Experience Manager Guides에서 게시

4단계의 프로젝트 액세스 토큰을 사용하여 **Git 계정 유형**&#x200B;이 **GitLab**(으)로 설정된 EDS 게시 프로필을 만듭니다. 그런 다음 EDS 출력 사전 설정에서 이 프로필을 선택하고 출력을 생성합니다. 출력은 GitLab 저장소의 `docs` 폴더에 커밋됩니다.

단계는 [EDS 게시 프로필 만들기](./configure-eds.md#create-the-eds-publish-profile-for-github-or-gitlab) 및 [EDS에 대한 출력 사전 설정 만들기](./configure-eds.md#create-an-output-preset-for-eds-and-generate-output)를 봅니다.

## 문제 해결

- **푸시 후 사이트에 이전 콘텐츠가 표시됨:** 웹후크가 Cloud Manager에 이벤트를 전달하고 있는지 확인한 후 최신 동기화 작업의 상태를 확인하십시오.
- **동기화 오류 `Unable to fetch hlxignore: 401`:** `cm-byog` 암호가 잘못되었습니다. 9단계의 비밀로 다시 만듭니다.
- **다른 사이트에 연결된 리포지토리:** Cloud Manager 리포지토리는 한 번에 하나의 사이트에만 연결할 수 있습니다. 사이트 간에 리포지토리를 공유하려면 [다시 시도](https://www.aem.live/docs/repoless)를 사용하십시오.

자세한 내용은 [자체 Git 가져오기에서 문제 해결](https://www.aem.live/developer/byo-git#troubleshooting)을 참조하십시오.
