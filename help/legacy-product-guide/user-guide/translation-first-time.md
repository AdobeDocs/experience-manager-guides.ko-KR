---
title: 콘텐츠 번역 모범 사례
description: AEM Guides의 콘텐츠 번역 모범 사례를 알아봅니다. 번역 서비스를 구성하고 새 번역 프로젝트를 만들고 번역 작업을 시작하는 방법에 대해 알아봅니다.
feature: Translation
role: User
source-git-commit: 76c731c6a0e496b5b1237b9b9fb84adda8fa8a92
workflow-type: tm+mt
source-wordcount: '1295'
ht-degree: 1%

---

# 콘텐츠 번역 모범 사례 {#id1678G0S702F}

콘텐츠 번역을 위해 다음 사항을 고려하십시오.

- 폴더 및 파일 이름은 공백, 아포스트로피, 중괄호, 등호, 특수 문자 또는 비 ASCII 문자가 없어야 합니다.

- 다른 언어로 콘텐츠를 번역하는 경우 각 언어에 해당하는 폴더를 만들어야 합니다. 이러한 각 언어 폴더에는 해당 언어에 해당하는 콘텐츠가 포함됩니다. 예를들어 언어 지정자를 사용하여 `de`(독일어), `fr`(프랑스어) 등의 폴더를 만들 수 있습니다. 또는 프랑스에서 사용되는 프랑스어의 경우 `fr-FR`, 캐나다에서 사용되는 프랑스어의 경우 `fr-CA`과 같은 언어 및 지역 지정자를 사용하여 폴더를 만들 수 있습니다.
- 대상 언어에도 인스턴스의 대상 언어 폴더에 따라 실제 로케일이 선택되어야 합니다.
- 클라우드 구성은 소스 폴더의 구성과 동일해야 하며 하나의 폴더에 클라우드 구성이 하나만 있어야 합니다. 여러 번역 커넥터를 사용하려는 경우 /conf 아래에 여러 폴더를 만들 수 있습니다.
- 폴더에는 1000개 이상의 파일이 포함될 수 없습니다.
- 번역 프로세스를 시작하는 사용자에게 소스 및 타겟 언어 폴더에 대한 읽기, 수정, 만들기 및 삭제 권한이 있는지 확인합니다.
- 콘텐츠를 번역하려면 번역 프로젝트를 만들어야 하므로 사용자는 AEM에서 프로젝트를 만들 수 있는 액세스 권한을 보유해야 합니다.
- 맵에서 조건부 사전 설정을 사용하려면 번역 프로세스를 시작하기 전에 조건부 사전 설정을 만들어야 합니다. 조건부 사전 설정은 맵의 번역된 버전에서도 번들로 제공되므로 번역 프로세스를 시작하기 전에 사전 설정을 만들면 번역된 버전에서 사용할 수 있습니다.
- 컨텐츠 번역 프로세스는 AEM Assets UI가 아닌 DITA 맵 콘솔에서 시작해야 합니다.
- 사람 번역을 통해 콘텐츠를 번역하는 경우 구성 요소 기반 DITA 번역 워크플로를 사용하면 안 됩니다. 단, 이 옵션은 기계 번역에 사용해야 합니다.
- 로컬라이제이션이 필요하지 않은 전 세계적으로 사용되는 콘텐츠 및 미디어는 언어 사본에서 제외해야 합니다.
- 현지화해야 하는 모든 공통 콘텐츠는 언어 폴더 아래의 공통 폴더에 보관해야 합니다.

다음 그림은 콘텐츠 및 세 개의 언어 사본을 전역적으로 사용한 경우 AEM의 폴더 구조 예를 보여 줍니다.

![](images/aem-directory_structure.png){width="800" align="left"}

## 번역 서비스 구성

다음 단계를 수행하여 사용할 사람 번역 서비스 또는 기계 번역 서비스를 구성합니다.

1. Assets UI에서 소스 언어 폴더를 선택합니다.

1. 폴더 속성을 열고 **Cloud Service** 탭으로 이동합니다.

1. **Cloud Service** 탭에서 사용할 번역 서비스를 구성합니다.

   기계 기반 또는 사람 번역을 구성할 수 있습니다.

   한 폴더에 번역 커넥터에 대한 구성이 하나만 있어야 합니다. 여러 번역 커넥터가 있는 경우 /conf 아래에 여러 폴더를 만들 수 있습니다. 번역 프로세스를 시작하기 전에 소스 언어 폴더에 클라우드 구성을 선택해야 합니다.

   >[!NOTE]
   >
   > 타사 번역 서비스와의 통합에 대한 자세한 내용은 AEM 설명서에서 [번역 통합 프레임워크 구성](https://experienceleague.adobe.com/docs/experience-manager-cloud-service/sites/administering/reusing-content/translation/integration-framework.html?lang=en)을 참조하십시오.

1. 업데이트된 폴더 속성을 저장하려면 **저장 및 닫기**&#x200B;를 클릭하십시오.


>[!TIP]
>
> 콘텐츠 번역에 대한 모범 사례는 모범 사례 안내서의 *번역* 섹션을 참조하십시오.

## 새 번역 프로젝트 만들기

번역 프로젝트를 만들려면 다음 단계를 수행하십시오.

>[!NOTE]
>
> 이 절차의 단계를 수행하기 전에 [콘텐츠 번역 모범 사례](#id1678G0S702F)에 설명된 대로 필요한 언어 루트 및 대상 폴더를 만들었는지 확인하십시오.

1. Assets UI에서 DITA 맵 파일을 클릭합니다.

1. **번역** 탭을 클릭합니다.

1. **타겟 언어** 목록에서 프로젝트를 번역할 로케일을 선택하고 **완료**&#x200B;를 클릭합니다.

   주제 및 관련 에셋의 요약 및 세부 정보가 표시됩니다.

   >[!IMPORTANT]
   >
   > **대상 언어**&#x200B;에는 언어 폴더가 원본 언어와 평행하게 만들어진 언어만 표시됩니다. 소스 언어 폴더의 한 수준 아래 등 다른 수준에서 만든 언어 폴더도 표시되지 않습니다. 모든 대상 언어 폴더를 소스 언어 폴더와 동일한 수준으로 만들어야 합니다.

1. 번역을 위해 전송할 주제를 선택합니다.

   다음 항목 필터링 옵션을 사용할 수도 있습니다.

   >[!NOTE]
   >
   > 필요한 필터를 적용한 후 필터 패널에서 **완료**&#x200B;를 클릭하여 선택한 항목에 따라 항목을 필터링합니다.

   - **번역 상태**: 번역 상태에 따라 주제를 필터링하도록 선택합니다. 사용 가능한 옵션은 [동기화 중단], [복사본 누락], [진행 중] 및 [동기화 중]입니다.
   - **검색**: 항목 제목에서 검색할 하나 이상의 용어를 입력하십시오.
   - **Source 형식**: 파일 형식을 기준으로 항목을 필터링하도록 선택합니다. 사용 가능한 옵션은 모두, DITA, DITA 맵, 리소스입니다.
   - **다음 날짜 이후에 수정된 Source 버전**: 수정 날짜 및 시간을 기준으로 주제를 필터링하도록 선택합니다. 지정된 날짜 및 시간 이후에 수정된 모든 주제가 목록에 표시됩니다.
   - **기준선**: [기준선 사용]을 클릭하고 맵에서 만든 기준선을 선택합니다. 선택한 베이스라인에 속하는 모든 파일이 [번역] 페이지에 표시됩니다. 기준선에서 원하는 파일을 선택하고 번역 프로세스를 진행할 수 있습니다. 콘텐츠가 번역되면 번역된 기준선을 내보낼 수 있습니다. 번역된 기준선을 내보내는 방법에 대한 자세한 내용은 [번역된 기준선 내보내기](generate-output-use-baseline-for-publishing.md#id196SE600GHS)를 참조하십시오.
1. 필터 패널 하단의 **언어 사본 만들기/업데이트**&#x200B;를 클릭합니다.

1. **프로젝트** 목록에서 **새 번역 프로젝트 만들기**&#x200B;를 선택합니다.

   >[!NOTE]
   >
   > 번역 프로젝트가 이미 있는 경우 해당 프로젝트에 주제를 추가할 수 있습니다. **프로젝트** 목록에서 **기존 번역 프로젝트에 추가** 옵션을 선택하고 **기존 번역 프로젝트** 목록에서 프로젝트를 선택합니다.

1. In the **Project Title** field, enter a title for the project.

1. 번역을 위해 맵을 전송하려면 **DITA 맵 포함** 옵션을 선택하십시오.
1. 새 번역 프로젝트를 만들려면 **시작**&#x200B;을 클릭하세요.

   선택한 버전의 주제로 새 번역 프로젝트가 만들어집니다. 이때 번역 프로젝트가 생성되었음을 확인하는 팝업 메시지가 표시됩니다. 번역 프로젝트에서 모든 타겟 언어 사본을 사용할 수 있게 되면 받은 편지함에서 알림을 받게 됩니다. 번역 프로젝트에서 타겟 언어 사본 영역을 사용할 수 있으면 번역 작업을 시작할 수 있습니다.

   ![](images/status-translation-uuid.png){width="800" align="left"}


번역 탭에는 다음 섹션이 있습니다.

- **요약**: 참조된 주제 및 소스 언어의 수를 해당 코드와 함께 표시합니다.
- **세부 정보**: 주제 제목, 주제 유형, 주제의 언어 코드, 원본 언어, 원본 주제의 버전, 주제에 추가된 레이블 및 번역 상태를 표시합니다.




## 번역 작업 시작 {#id225IK030OE8}

번역 작업을 시작하려면 다음 단계를 수행하십시오.

1. **프로젝트** 콘솔에서 현지화를 위해 만든 프로젝트 폴더로 이동합니다.

1. 현지화 프로젝트를 클릭하여 세부 정보 페이지를 엽니다.

1. **번역 작업** 타일에서 화살표를 클릭하고 목록에서 **시작**&#x200B;을 선택하여 번역 워크플로를 시작합니다.

   >[!NOTE]
   >
   > 사람 번역 서비스를 사용하는 경우 번역을 위해 콘텐츠를 내보내야 합니다. 번역된 콘텐츠를 가져온 다음에는 번역 프로젝트로 다시 가져와야 합니다.

1. 번역 작업의 상태를 보려면 **번역 작업** 타일 하단의 생략 부호를 클릭합니다.


번역이 완료되면 번역 작업의 상태가 *검토 준비됨*(으)로 변경됩니다. 번역 프로세스를 완료하려면 프로젝트 콘솔의 번역 작업 타일에서 번역된 사본 및 에셋 메타데이터를 수락해야 합니다.

>[!NOTE]
>
> 번역 작업에서 하나 이상의 주제에 대한 번역을 거부하면 거부된 모든 주제의 **진행 중** 번역 상태가 원래 상태로 되돌아갑니다. 참조된 주제의 상태를 확인하고 최신 번역 상태에 따라 되돌립니다. 또한 대상 프로젝트에서 생성된 번역 파일은 번역이 거부되더라도 삭제되지 않습니다.

**상위 항목:**[&#x200B;콘텐츠 번역](translation.md)