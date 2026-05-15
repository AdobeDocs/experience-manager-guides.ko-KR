---
title: Experience Manager Guides의 세션 시간 초과 이해
description: Experience Manager Guides의 세션 시간 초과에 대해 알아봅니다.
feature: Authoring, Publishing
role: User
exl-id: f09b1215-4753-4dfd-89ef-1629257e5efe
TQID: https://experienceleague.adobe.com/nrxkVxSUooy2-08PaUp1pjiH8w2kBBNGC9efarvepbQ
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: ab01a588-7dea-43f2-a699-0b3f128465d6
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2: id: c1579802-ddd4-4214-8a91-97b2066abe11
source-git-commit: 8ed5c9cb07c56b84b36ef56a55af8738989a6d3f
workflow-type: tm+mt
source-wordcount: 249
ht-degree: 0%

---

# Experience Manager Guides은 특정 기간이 지난 후 로그아웃하는 이유는 무엇입니까?

Experience Manager Guides은 정의된 비활성화 기간(유휴 시간 초과) 이후 사용자 세션을 종료합니다. 이 자동 로그아웃 기능은 Adobe Experience Manager에서 구성됩니다. 세션이 만료되면 만료된 세션에 대해 사용자에게 알리는 팝업 경고가 표시됩니다. 이 경고는 사용자가 콘텐츠를 추가로 변경할 수 없도록 제한합니다.

**세션 시간 제한이 어떻게 작동합니까?**

Experience Manager Guides은 세션의 유효성을 확인하기 위해 30초마다 백그라운드 요청 `token.json`을(를) 보냅니다. 세션이 여전히 활성 상태인 경우 유효한 토큰이 반환됩니다. 비활성 상태로 인해 세션이 만료된 경우 빈 토큰이 반환되고 세션이 비활성 상태로 간주됩니다.

**세션이 만료되면 어떻게 됩니까?**

비활성 세션이 감지될 때:

- 로그아웃되었음을 알리는 팝업 경고가 나타납니다.

  ![](images/sign-out-prompt.png)

- 경고는 애플리케이션과의 모든 상호 작용을 비활성화합니다.

- **확인**&#x200B;을 선택하면 브라우저가 새로 고침되고 로그인 페이지로 리디렉션됩니다.
- 로그인하면 Experience Manager Guides의 마지막으로 연 페이지로 리디렉션됩니다.

**다음 단계**

세션 만료 경고는 비활성 세션 중에 애플리케이션을 변경할 수 없도록 제한하여 데이터 손실을 방지하는 데 도움이 됩니다. 콘텐츠의 우발적 손실을 방지하려면 특히 오랜 기간 동안 시스템에서 물러나기 전에 편집기에서 정기적으로 작업을 저장하는 것이 좋습니다.
