---
title: ' [!DNL AEM Guides]에서 사용자 지정 DITA-OT 설정'
description: ' [!DNL Adobe Experience Manager Guides]에서 사용자 지정 DITA-OT를 설정하는 방법을 알아봅니다.'
role: Admin
exl-id: f479c2cf-5b8b-4517-be97-81303468007a
feature: DITA-OT Configuration
TQID: https://experienceleague.adobe.com/EaU6rkZL-RBkkYDhKxHNkizIVSqNzEDd-TtFlJAmREw
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: cb8c6a2a-3c38-4e40-867c-756f8c36bb0e
subfeature_v2:
  - id: b1ef4d86-3917-4b76-a0bc-4a4771f9b3b0
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 174
ht-degree: 0%

---

# AEM용 [!DNL AEM Guides]에서 사용자 지정 DITA-OT 설정

사용자 지정 DITA-OT를 추가하는 단계는 _설치 및 구성 안내서_&#x200B;의 _사용자 지정 DITA-OT 플러그인 사용_ 섹션에 설명되어 있습니다.

높은 수준에서 단계는 다음과 같습니다.

+ 기본 DITA-OT 가져오기
   + [!DNL AEM Guides]에서 기본 DITA-OT의 복사본을 가져오려면 `/etc/fmdita/dita_resources/DITA-OT.zip` 경로에서 다운로드하십시오
   + 다른 버전을 얻으려면 [dita-ot 저장소](https://www.dita-ot.org/download)에서 다운로드할 수 있습니다.
+ [새 플러그인 추가](https://www.dita-ot.org/dev/topics/plugins-installing.html) 또는 기존 플러그인 사용자 지정과 같이 DITA-OT를 변경합니다(아래 관련 링크 섹션의 예 참조).
+ `DITA-OT.zip` 업로드가 `/apps/<project-folder>/dita_resources`에 수신되었습니다. 사용자 지정 프로젝트 폴더를 만드는 것이 좋습니다.
+ **[!UICONTROL 도구]** > **[!UICONTROL 안내서]** > **[!UICONTROL DITA 프로필]**&#x200B;을 통해 DITA 프로필을 추가합니다(사용자 지정 DITA-OT가 업로드되는 DITA-OT 경로 사용, 아래 스크린샷 참조).
  ![DITA 프로필](assets/dita-profile.png)

>[!MORELIKETHIS]
>
>+ [DITA-OT 플러그인 샘플 사용자 지정](https://www.dita-ot.org/dev/topics/pdf-customization.html)
