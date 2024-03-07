---
title: AEM Guides 릴리스
description: 최신 AEM Guides 릴리스 및 사전 요구 사항 AEM 버전
exl-id: 780697a9-bdc6-40c2-b258-64639fe30f88
feature: Release Notes
role: Leader
source-git-commit: 11b3460c8d11110c92d382d977bd28854650dfd1
workflow-type: tm+mt
source-wordcount: '958'
ht-degree: 1%

---

# [!DNL AEM Guides] 릴리스

[!DNL Adobe Experience Manager Guides] 는 AEM에 배포된 애플리케이션입니다. Adobe Experience Manager의 기본 DITA 지원을 활성화하는 강력한 엔터프라이즈급 구성 요소 콘텐츠 관리 솔루션(CCMS)으로, AEM에서 DITA 기반 콘텐츠 생성 및 전달을 처리할 수 있도록 촉진합니다.

AEM Guides 패키지는 UUID 빌드와 UUID가 아닌 빌드의 두 가지 변형에서 사용할 수 있습니다.

## UUID 및 비 UUID 빌드

UUID 빌드와 UUID가 아닌 빌드 간의 주요 차이점은 다음과 같습니다.

|  | 비 UUID 빌드 | UUID 빌드 |
|---|---|---|
| **자산 식별** | 모든 에셋은 저장소의 에셋 경로를 사용하여 식별됩니다. | 모든 에셋은 UUID(에셋을 처음 업로드할 때 시스템에서 생성한 고유 ID)를 사용하여 식별됩니다. |
| **참조 만들기** | 모든 콘텐츠 참조는 해당 경로를 기반으로 만들어집니다. | 모든 콘텐츠 참조는 UUID를 기반으로 생성됩니다. |

### UUID 빌드의 이점

* UUID 설치가 보다 성능이 뛰어납니다.
   * 참조는 경로에 독립적입니다. 참조 관리 시스템은 참조가 경로가 아닌 UUID를 기반으로 생성되므로 연결을 인식합니다.
   * 이동/업데이트 작업이 효율적임: 에셋이 저장소의 다른 경로로 이동하더라도 UUID는 그대로 유지됩니다. 따라서 이동/업데이트 작업 시 에셋 간의 참조를 패치하는 데 처리가 필요하지 않습니다.
* AEM Guides의 클라우드 설정에도 이 프레임워크를 사용하므로 UUID 빌드는 전향적입니다.


### 두 빌드 중 선택

* 신규 고객인 경우 UUID 빌드를 사용하는 것이 좋습니다.
* 기존 고객인 경우 이제 UUID가 아닌 빌드에서 UUID 빌드로 마이그레이션할 수 있으므로 UUID 빌드로 이동하도록 선택할 수 있습니다. 자세한 내용은 *비 UUID에서 UUID로의 콘텐츠 마이그레이션* 의 섹션 **Adobe Experience Manager Guides를 설치하고 구성합니다.**

>[!NOTE]
>
>* 고객은 첫 번째 설정 시 UUID와 비 UUID 모드 중에서 결정해야 합니다(도움이 필요한 경우 Customer Success Manager와 연결하여 사용 사례에 따라 결정할 수 있도록 도와주십시오).
>* 한 버전의 AEM Guides에서 최신 버전으로 업그레이드할 때 고객은 기존 모드와 일치하도록 동일한 모드(UUID / non-UUID)를 선택해야 합니다. UUID가 아닌 빌드를 UUID 빌드로 직접 업그레이드하면 안 됩니다. 비 UUID 빌드에서 UUID 빌드로 이동하려면 컨텐츠 마이그레이션이 필요합니다.

**빌드 업그레이드**

이전 버전에서 최신 버전으로 업그레이드하는 경우 [!DNL AEM Guides], 마이그레이션 스크립트를 실행해야 할 수 있습니다. 업그레이드 지침은 릴리스 노트 및 버전별 설명서 를 참조하십시오.

일부 업그레이드 경로가 직접 지원되는 것은 아닙니다. 예를 들어 버전 3.8에서만 버전 4.0으로 직접 업그레이드할 수 있습니다. 3.8 이전 버전을 사용하는 경우 버전 관련 설명서에서 업그레이드 지침을 참조하십시오 [도움말 보관](https://helpx.adobe.com/xml-documentation-for-experience-manager/archive.html).
업그레이드 경로의 유효성을 검사하려면 고객 성공 관리자에게 문의하십시오.

**[!DNL AEM Guides]빌드**

다음 목록에는 최신 항목이 포함되어 있습니다. [!DNL AEM Guides] ams 또는 온프레미에서 설치할 수 있는 패키지, 해당 AEM 버전(전제 조건), 패키지 다운로드 링크 및 기타 유용한 정보. 의 최신 빌드만 사용하는 것이 좋습니다. [!DNL AEM Guides]. 어떤 이유로 이전 빌드에 액세스해야 하는 경우 계정의 고객 성공 관리자에게 문의하십시오.

>[!NOTE]
>
>에 액세스하려면 고객 성공 관리자에게 문의하십시오. [!DNL AEM Guides] AEM용 빌드 as a Cloud Service.

| [!DNL AEM Guides] 릴리스 | 릴리스 정보 | AEM 사전 요구 사항 | 다운로드 링크 작성 |
|---|---|---|---|
| **AEM Guides 4.4.0** | [4.4.0 업그레이드 지침](./upgrade-instructions-4-4.md)<br><br>[4.4.0 새로운 기능](./whats-new-4-4.md)<br><br> | **비 UUID 및 UUID 4.4.0** <br>AEM 6.5 SP19, SP18 또는 SP17 <br><br>   Java: 11 또는 8 <br><br> **비 UUID 및 UUID 4.4.0** <br>AEM 6.5 SP19, SP18 또는 SP17  <br><br>   Java: 11 또는 8 | **비 UUID AEM 6.5** <br> [4.4.0](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-4%2Fcom.adobe.fmdita-6.5-4.4.0.40.zip) <br> **UUID AEM 6.5** <br>[4.4.0](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-4%2Fcom.adobe.fmdita-6.5-uuid-4.4.0.40.zip) |
| **AEM Guides 4.3.0** | [4.3.1.5 업그레이드 지침](./upgrade-instructions-4-3-1-5.md)<br><br> [4.3.1 릴리스 노트](./release-notes-4-3-1.md)<br><br>[4.3.0 릴리스 노트](./release-notes-4-3.md) | **비 UUID 및 UUID 4.3.1.5** <br>AEM 6.5 SP18, SP17, SP16, SP15 또는 SP14 <br><br>   Java: 11 또는 8 <br><br> **비 UUID 및 UUID 4.3.1** <br>AEM 6.5 SP18, SP17, SP16, SP15 또는 SP14 <br><br>   Java: 11 또는 8 <br><br> **비 UUID 및 UUID 4.3.0** <br>AEM 6.5 SP18, SP17, SP16, SP15 또는 SP14 <br><br>   Java: 11 또는 8 | **비 UUID AEM 6.5** <br>[4.3.1.5](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-3-1-5%2Fcom.adobe.fmdita-6.5-hotfix-4.3.1.5.1.zip)<br> [4.3.1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-3-1%2Fcom.adobe.fmdita-6.5-4.3.1.390.zip) <br> [4.3.0](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-3%2Fcom.adobe.fmdita-6.5-4.3.0.347.zip)<br> **UUID AEM 6.5** <br>[4.3.1.5](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-3-1-5%2Fcom.adobe.fmdita.uuid-6.5-hotfix-4.3.1.5.1.zip)<br> [4.3.1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-3-1%2Fcom.adobe.fmdita-6.5-uuid-4.3.1.390.zip)<br>[4.3.0](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-3%2Fcom.adobe.fmdita-6.5-uuid-4.3.0.347.zip) |
| **AEM Guides 4.2** | [4.2.1 릴리스 노트](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/release-info/release-notes/on-prem-release-notes/42-release/42-release-notes/release-notes-4.2.1.html?lang=en)<br> <br> [4.2 릴리스 노트](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/release-info/release-notes/on-prem-release-notes/42-release/42-release-notes/release-notes-4.2.html?lang=en) | **비 UUID 및 UUID 4.2.1**<br><br> AEM 6.5 SP15, SP14, SP13 또는 SP12 <br><br>Java: 11 또는 8 <br><br>**비 UUID 및 UUID 4.2**<br><br> AEM 6.5 SP15, SP14, SP13 또는 SP12 <br><br>Java: 11 또는 8<br><br> | **비 UUID**: <br> **AEM 6.5** <br>[4.2.1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-2-1%2F4-2-1-non-uuid%2Fcom.adobe.fmdita-6.5-4.2.1.270.zip)<br>[4.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-2%2F4-2-non-uuid%2Fcom.adobe.fmdita-6.5-4.2.229.zip)<br><br> **UUID** <br>**AEM 6.5** <br>[4.2.1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-2-1%2F4-2-1-uuid%2Fcom.adobe.fmdita-6.5-uuid-4.2.1.270.zip)<br>[4.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-2%2F4-2-uuid%2Fcom.adobe.fmdita-6.5-uuid-4.2.229.zip)<br> |
| **AEM Guides 4.1** | [4.1.x 릴리스 노트](https://experienceleague.adobe.com/docs/experience-manager-guides-learn/tutorials/release-info/release-notes/on-prem-release-notes/release-notes-4.1.html) | **비 UUID 및 UUID 4.1.2**<br><br> AEM 6.5 SP13, SP12, SP11 또는 SP10 <br>Java: 11 또는 8 <br><br>**비 UUID 및 UUID 4.1**<br><br> AEM 6.5 SP13, SP12, SP11 또는 SP10 | **비 UUID**: <br> **AEM 6.5** <br>[4.1.3](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-1-3%2F4-1-3-non-uuid%2Fcom.adobe.fmdita-6.5-sp-4.1.3.2.zip)<br>[4.1.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-1-2%2F4-1-2-non-uuid%2Fcom.adobe.fmdita-6.5-sp-4.1.2.11.zip)<br>[4.1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-1%2F4-1-non-uuid%2Fcom.adobe.fmdita-6.5-4.1.159.zip)<br><br> **UUID** <br>**AEM 6.5** <br>[4.1.3](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-1-3%2F4-1-3-uuid%2Fcom.adobe.fmdita.uuid-6.5-sp-4.1.3.2.zip)<br>[4.1.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-1-2%2F4-1-2-uuid%2Fcom.adobe.fmdita.uuid-6.5-sp-4.1.2.11.zip)<br>[4.1](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-1%2F4-1-uuid%2Fcom.adobe.fmdita-6.5-uuid-4.1.159.zip) |
| **AEM Guides 4.0** | [4.0.x 릴리스 노트](https://helpx.adobe.com/xml-documentation-for-experience-manager/release-note/release-notes-xml-documentation-solution-4-0.html) | **비 UUID 및 UUID 4.0.3**<br> AEM 6.5 SP12, SP11, SP10 또는 SP9 <br>Java: 11 또는 8 <br><br> <br>**비 UUID 및 UUID 4.0.2** <br> AEM 6.5 SP12, SP11, SP10 또는 SP9 <br>Java: 11 또는 8 <br><br> **비 UUID 및 UUID 4.0** <br> AEM 6.5 SP11, SP10 또는 SP9 | **비 UUID**: <br> **AEM 6.5** <br>[4.0.3](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-0-3%2F4-0-2-non-uuid%2Fcom.adobe.fmdita-6.5-hotfix-4.0.3.1.zip)<br>[4.0.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-0-2%2F4-0-2-non-uuid%2Fcom.adobe.fmdita-6.5-sp-4.0.2.10.zip)  <br> [4.0](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/4-0/4-0-non-uuid/com.adobe.fmdita-6.5-4.0.70.zip)  <br><br> **UUID** <br>**AEM 6.5**  <br>[4.0.3](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-0-3%2F4-0-3-uuid%2Fcom.adobe.fmdita.uuid-6.5-hotfix-4.0.3.1.zip) <br>[4.0.2](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2F4-0-2%2F4-0-2-uuid%2Fcom.adobe.fmdita.uuid-6.5-sp-4.0.2.10.zip)<br> [4.0](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/4-0/4-0-uuid/com.adobe.fmdita-6.5-uuid-4.0.70.zip) |
| **AEM Guides 3.8.5** <br> 3.8.5는 3.8 위에 SP 릴리스가 추가된 것입니다. <br>3.8.5 SP에 중요한 수정 사항이 포함되어 있으므로 3.8 릴리스는 독립 실행형으로 설치할 수 없습니다. <br>먼저 3.8을 설치한 다음 SP 3.8.5를 설치해야 합니다. | [3.8.x 릴리스 노트](https://helpx.adobe.com/xml-documentation-for-experience-manager/release-note/release-notes-xml-documentation-solution-3-8.html) | **비 UUID** <br> AEM 6.5 SP9 또는 SP8 <br> AEM 6.4 SP8 <br> AEM 6.3 SP3 <br><br> **UUID** <br> AEM 6.5 SP9 또는 SP8 | **비 UUID**: <br> **AEM 6.5** <br> [3.8.5 SP](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8-5/com.adobe.fmdita-6.5-hotfix-3.8.5.2.zip) <br>[3.8](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8/com.adobe.fmdita-6.5-3.8.166.zip)<br> **AEM 6.4** <br> [3.8.5 SP](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8-5/com.adobe.fmdita-6.4-hotfix-3.8.5.1.zip) <br>[3.8](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8/com.adobe.fmdita-6.4-3.8.166.zip) <br> **AEM 6.3** <br> [3.8.5 SP](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8-5/com.adobe.fmdita-6.3-hotfix-3.8.5.1.zip) <br>[3.8](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8/com.adobe.fmdita-6.3-3.8.166.zip) <br><br> **UUID** <br>**AEM 6.5** <br> [3.8.5 SP](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8-5uuid/com.adobe.fmdita.uuid-6.5-hotfix-3.8.5.2.zip) <br> [3.8](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=/content/software-distribution/en/details.html/content/dam/aem/public/aemdox/3-8uuid/com.adobe.fmdita.uuid-6.5-3.8.168.zip) |
