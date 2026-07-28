---
title: Experience Manager Guides에서 "문자열이 너무 깁니다." 예외가 발생하여 메타데이터 내보내기가 실패합니다.
description: Assets UI에서 안내서 컨텐츠에 대한 메타데이터 내보내기가 실패할 수 있는 이유를 이해합니다.
feature: Authoring, Publishing
role: User
product_v2:
  - id: fae5e35a-80c9-4b94-9352-1a060a6aab1d
  - id: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2:
  - id: a3bd6397-2eb2-4908-a61c-226e26855dca
  - id: ab01a588-7dea-43f2-a699-0b3f128465d6
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
source-git-commit: 1c61df4820e559417410d25c81800637481b040c
workflow-type: tm+mt
source-wordcount: 274
ht-degree: 0%

---

# &quot;문자열이 너무 깁니다.&quot; 예외로 인해 폴더에 대한 메타데이터 내보내기가 실패하는 이유는 무엇입니까?

Assets UI의 폴더에 대해 [메타데이터 내보내기](https://experienceleague.adobe.com/ko/docs/experience-manager-65/content/assets/using/metadata#export-metadata)를 수행하는 경우 `String is too long` 예외로 인해 내보내기 작업이 실패할 수 있습니다. 이 문제는 일반적으로 폴더에 `baselineObj`과(와) 같이 문자열이 아닌 값을 저장하는 Experience Manager Guides 관련 속성이 있을 때 발생합니다.

**이 문제가 발생하는 이유는 무엇입니까?**

에셋의 메타데이터 노드 아래에 저장된 일부 속성은 Experience Manager Guides에서 내부적으로 사용되며 일반 문자열 값이 아닌 JSON 개체와 같은 데이터를 포함합니다. 폴더의 메타데이터를 내보낼 때 **내보낼 속성**&#x200B;이(가) **모두**(으)로 설정되어 있으면 내보내기 작업에서 모든 속성을 문자열로 변환하려고 시도하지만 이러한 종류의 데이터를 포함하는 속성에서 실패합니다.

**어떻게 방지됩니까?**

이 오류를 방지하기 위해 **자산 메타데이터 내보내기 구성**&#x200B;에서 기본적으로 다음 속성이 메타데이터 내보내기에서 제외됩니다.

- `baseline`
- `namedoutputs`
- `conditionpresets`
- `nextgenbaselinestore`

**이 속성을 내보낼 수 있습니까?**

예. 내보내기에 이러한 속성 중 하나 이상이 필요한 경우 **자산 메타데이터 내보내기 구성**&#x200B;을 편집하고 제외 목록에서 제거할 수 있습니다.

제외 목록에서 속성을 제거한다고 해서 내보내기가 성공하는 것은 아닙니다. 기본 데이터의 크기 및 내용에 따라 동일한 예외로 작업이 실패할 수 있습니다. 속성을 다시 활성화한 후 이 문제가 발생하는 경우 제외 목록에 다시 추가하여 신뢰할 수 있는 기본 내보내기 동작을 복원합니다.
