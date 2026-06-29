---
title: 출력 생성 작업의 상태 보기
description: FrameMaker 문서의 출력 생성 큐를 봅니다. 출력 생성 작업의 상태를 보는 방법에 대해 알아봅니다.
feature: Publishing FrameMaker Documents
role: User
hide: true
exl-id: bf5a4365-0183-43d5-a39a-b9eb8a34b27d
TQID: https://experienceleague.adobe.com/FP5RxNtyWcdS-xpw2Atttt3x6DHx73Ljv-Ym91IxY5s
product_v2: id: fae5e35a-80c9-4b94-9352-1a060a6aab1did: fd1f54a9-f50c-467d-8956-cebbaf4f3eb8
feature_v2: id: a3bd6397-2eb2-4908-a61c-226e26855dcaid: d90290ec-3e61-4ebd-8649-bcafe0836803
subfeature_v2: id: bf79f6d3-0ad0-4d82-99e4-42ce98324d60id: fd6cc9e1-e5e5-494e-b7b1-a32f2d6cd7c9
role_v2: id: b69b2659-1057-424e-8fc5-ed9e016dc554
source-git-commit: 7ba2ad081f90fcbd38c7b34524a9ed1378e64f0d
workflow-type: tm+mt
source-wordcount: 544
ht-degree: 0%

---

# 출력 생성 작업의 상태 보기 {#viewing_output_history}

FrameMaker 문서에 대한 출력 생성 작업을 시작하면 AEM Guides은 이 작업을 출력 생성 대기열로 보냅니다. 이 큐는 실시간으로 업데이트되며, 큐의 각 출력 생성 작업의 상태를 표시합니다.

출력 생성 대기열을 보려면 다음 단계를 수행하십시오.

1. Assets UI에서 출력 생성 상태를 확인할 FrameMaker 문서로 이동하여 클릭합니다.

1. 출력을 클릭합니다.

   ![](images/output-queued-fm.png){width="800"}

1. [출력] 페이지는 두 부분으로 나뉩니다.

   - **큐에 있는 출력:**

     생성이 대기 중이거나 생성 중인 출력을 나열합니다. 또한 대기열에 추가된 작업에 사용되는 출력 생성 설정 또는 사전 설정, 유형, 작업을 시작한 사용자, 작업이 대기열에 추가된 이후 시간 및 현재 상태를 확인할 수 있습니다.

   - **생성된 출력**

     완료된 출력 작업을 나열합니다. 다시 말하지만, 여기에 표시된 정보는 출력 생성 시간의 차이만 있을 뿐 대기열에 추가된 출력 섹션과 유사합니다.

     이 목록에서 성공적으로 실행된 작업 또는 실패한 작업이 있을 수 있습니다. 성공적으로 완료된 작업의 경우 게시 프로세스는 생성된 위치 열의 링크를 클릭하여 액세스할 수 있는 로그 파일 \(logs.txt\)을 만듭니다.

> **테이블의 여러 셀, 전체 행 또는 열에 특성을 정의하는 방법**
>
> 셀, 행 또는 열 레벨에서 속성을 정의할 수 있습니다
>
> <details>
&gt; <summary>단계 표시</summary>
>
> 테이블의 여러 셀, 전체 행 또는 열에 속성을 정의할 수도 있습니다. 예를 들어 표 셀을 정렬하려면 필요한 셀을 끌어서 선택합니다. 콘텐츠 속성 패널(오른쪽)에서 속성 **Type**&#x200B;이(가) **entry**(으)로 변경됩니다.
>
> 1. **특성** 섹션에서 **+추가**&#x200B;를 선택합니다.
> 1. **특성** 드롭다운 목록에서 `@valign` 특성을 선택합니다.
> 1. 값 드롭다운 목록에서 선택한 테이블 셀에 적용할 원하는 텍스트 정렬을 선택합니다.
> 1. **추가** 선택
>
> ![](images/align-table-cell_cs.png)
>
> </details>



**테이블의 여러 셀, 전체 행 또는 열에 특성을 정의합니다**

셀, 행 또는 열 레벨에서 속성을 정의할 수 있습니다.

<details>
<summary>단계 표시</summary>

테이블의 여러 셀, 전체 행 또는 열에 속성을 정의할 수도 있습니다. 예를 들어 표 셀을 정렬하려면 필요한 셀을 끌어서 선택합니다. 콘텐츠 속성 패널(오른쪽)에서 속성 **Type**&#x200B;이(가) **entry**(으)로 변경됩니다.

1. **특성** 섹션에서 **+추가**&#x200B;를 선택합니다.
1. **특성** 드롭다운 목록에서 `@valign` 특성을 선택합니다.
1. 값 드롭다운 목록에서 선택한 테이블 셀에 적용할 원하는 텍스트 정렬을 선택합니다.
1. **추가** 선택

   ![](images/align-table-cell_cs.png)

   </details>

>[!BEGINSHADEBOX]
>
> **테이블의 여러 셀, 전체 행 또는 열에 특성을 정의하는 방법**
>
> 셀, 행 또는 열 레벨에서 속성을 정의할 수 있습니다.
>
> <details>
&gt; <summary>단계 표시</summary>
>
> 테이블의 여러 셀, 전체 행 또는 열에 속성을 정의할 수도 있습니다. 예를 들어 표 셀을 정렬하려면 필요한 셀을 끌어서 선택합니다. 콘텐츠 속성 패널(오른쪽)에서 **Type** 속성이 **entry**(으)로 변경됩니다.
>
> 1. **특성** 섹션에서 **+추가**&#x200B;를 선택합니다.
> 1. **특성** 드롭다운에서 `@valign` 특성을 선택합니다.
> 1. **값** 드롭다운에서 원하는 텍스트 맞춤을 선택합니다.
> 1. **추가**&#x200B;를 선택합니다.
>
> ![](images/align-table-cell_cs.png)
>
> </details>
>
>[!ENDSHADEBOX]




**상위 항목:**[ FrameMaker 문서의 출력 생성](fm-output-generatation.md)

