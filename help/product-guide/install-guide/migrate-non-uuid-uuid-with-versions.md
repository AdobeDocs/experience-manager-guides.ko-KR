---
title: 버전이 있는 비 UUID 콘텐츠를 UUID 콘텐츠로 변환
description: 버전이 있는 비 UUID 콘텐츠를 UUID 콘텐츠로 마이그레이션하는 방법에 대해 알아봅니다.
source-git-commit: 0d985688af601ca51822b116ea4baafce19f0658
workflow-type: tm+mt
source-wordcount: '755'
ht-degree: 0%

---

# 버전 있는 콘텐츠 마이그레이션

다음 단계를 수행하여 UUID가 아닌 버전 관리 콘텐츠를 UUID 콘텐츠로 마이그레이션합니다.

>[!NOTE]
>
>다음 [업그레이드 지침](./upgrade-xml-documentation.md) 사용 허가된 제품 버전에만 적용됩니다.

## 호환성 매트릭스

| 현재 Experience Manager 가이드 버전(UUID 아님) | UUID로 마이그레이션하는 데 필요한 버전 | 지원되는 업그레이드 경로 |
|---|---|---|
| 3.8.5, 4.0.x 또는 4.1.x | 4.1 비 UUID | UUID(4.1) 를 설치하고 마이그레이션을 실행합니다 |
| 4.2, 4.2.x 또는 4.3 | 4.3.0 비 UUID | UUID(4.3.1)를 설치하고 마이그레이션을 실행합니다 |
| 4.3.1 | NA | NA |

## 패키지 설치

사용 중인 버전에 따라 Adobe 소프트웨어 배포 포털에서 필요한 패키지를 다운로드합니다.
<details>
<summary>  버전 4.1 업그레이드 경로용 패키지</summary>

1. **마이그레이션 전**: [com.adobe.guides.pre-uuid-migration-1.0.9.zip](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2Fother-packages%2Fuuid-migration%2F1-0%2Fcom.adobe.guides.pre-uuid-migration-1.0.9.zip)
1. **마이그레이션**: [com.adobe.guides.uuid-upgrade-1.0.19.zip](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2Fother-packages%2Fuuid-migration%2F1-0%2Fcom.adobe.guides.uuid-upgrade-1.0.19.zip)
</details>


<details>
<summary> 버전 4.3.1 업그레이드 경로 패키지</summary>

1. **마이그레이션 전**: [com.adobe.guides.pre-uuid-migration-1.1.3.zip](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2Fother-packages%2Fuuid-migration%2Fcom.adobe.guides.pre-uuid-migration-1.1.3.zip)
1. **마이그레이션**: [com.adobe.guides.uuid-upgrade-1.1.15.zip](https://experience.adobe.com/#/downloads/content/software-distribution/en/aem.html?package=%2Fcontent%2Fsoftware-distribution%2Fen%2Fdetails.html%2Fcontent%2Fdam%2Faem%2Fpublic%2Faemdox%2Fother-packages%2Fuuid-migration%2Fcom.adobe.guides.uuid-upgrade-1.1.15.zip)

</details>

## 마이그레이션 전

UUID가 아닌 버전(4.1 non-UUID 또는 4.3.0 non-UUID)에 대해 다음 검사를 수행합니다.

1. 사용 중인 버전에 따라 마이그레이션 전 패키지를 설치하십시오.

   >[!NOTE]
   >
   >* 마이그레이션을 실행하려면 관리자 권한이 필요합니다.
   >* 마이그레이션을 계속하기 전에 오류가 있는 파일을 수정하는 것이 좋습니다.
1. (선택 사항) 콘텐츠에 대해 버전 지우기를 수행하여 불필요한 버전을 제거하고 마이그레이션 프로세스를 가속화합니다. 버전 삭제를 수행하려면 옵션을 선택합니다 **버전 삭제** 마이그레이션 화면에서 URL을 사용하여 사용자 인터페이스로 이동합니다. `http://<server-name>/libs/fmdita/clientlibs/xmleditor_uuid_upgrade/page.html`.
   >[!NOTE]
   >
   >이 유틸리티는 기준선 또는 검토에 사용된 버전을 제거하지 않으며 레이블이 없습니다.
1. 시작 `http://<server-name>/libs/fmdita/clientlibs/xmleditor_uuid_upgrade/page.html`.
1. 선택 **호환성 평가**  왼쪽 패널에서 폴더 경로를 찾습니다.
1. 다음 정보를 나열하려면 호환성을 확인하십시오.
   * 총 파일 수
   * 총 버전
   * 예상 마이그레이션 시간
   * 오류가 발생한 파일 수



   ![마이그레이션의 호환성 평가 탭](assets/migration-compatibility-assessment.png){width="800" align="left"}


1. 선택 **유효성 검사 구성** 왼쪽 패널에서 가져옵니다. 그런 다음, **맵 선택** 및 **사전 설정 선택** 구성을 위한 맵입니다. 현재 출력 유효성 검사 목록에는 마이그레이션 전에 존재하는 출력 파일이 표시되며, 나중에 마이그레이션 후에 생성된 출력 파일에 대해 유효성 검사를 수행할 수 있습니다.

   ![마이그레이션의 유효성 검사 탭 구성](assets/migration-configure-validation.png){width="800" align="left"}




## 마이그레이션

### 1단계: 구성 업데이트

1. 마이그레이션 중에 사용 가능한 공간이 AEM(crx-quickstart 디렉터리)에서 사용하는 공간의 10배 이상인지 확인하십시오. 마이그레이션을 완료하면 압축을 실행하여 대부분의 디스크 공간을 다시 확보할 수 있습니다( 참조) [개정 정리](https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=en)).

1. 사용 *사후 처리 워크플로 런처 활성화* 위치: `com.adobe.fmdita.config.ConfigManager` 및 *버전 사후 처리 활성화* 위치: `com.adobe.fmdita.postprocess.version.PostProcessVersionObservation.`

1. 지원되는 릴리스의 UUID 버전을 UUID가 아닌 버전에 설치합니다. 예를 들어 4.1 비 UUID 빌드를 사용하는 경우 UUID 버전 4.1을 설치하고 마이그레이션을 실행해야 합니다.

1. UUID 마이그레이션을 위한 새 패키지를 설치합니다.

1. 다음 워크플로우 및 다음에 실행되는 다른 워크플로우 비활성화 `/content/dam` 에서 런처 사용 `http://<server-name>/libs/cq/workflow/content/console.html`.

   * DAM 자산 업데이트 워크플로우
   * DAM 메타데이터 원본에 쓰기 워크플로우

1. 사용 안 함 *사후 처리 워크플로 런처 활성화* 위치: `com.adobe.fmdita.config.ConfigManager` 및 비활성화 *버전 사후 처리 활성화* 위치: `com.adobe.fmdita.postprocess.version.PostProcessVersionObservation`.

1. 속성 비활성화 유효성 검사 활성화(`validation.enabled`)를 클릭하여 제품에서 사용할 수 있습니다.

1. 다음을 확인합니다. `uuid.regex` 속성 폴더가에서 제대로 설정됨 `com.adobe.fmdita.config.ConfigManager`. 비어 있는 경우 기본값으로 설정합니다. `^GUID-(?<id>.*)`.
1. 다음에 대한 별도의 로거 추가 `com.adobe.fmdita.uuid` 브라우저 응답은에서 사용할 수도 있습니다. `/content/uuid-upgrade/logs`.

### 2단계: 마이그레이션 실행 및 유효성 검사

#### 마이그레이션 패키지 설치

1. 시작 `http://<server-name>/libs/fmdita/clientlibs/xmleditor_uuid_upgrade/page.html`.

   ![마이그레이션의 시스템 업그레이드 탭](assets/migration-system-upgrade.png){width="800" align="left"}

1. 선택 **시스템 업그레이드** 왼쪽 패널에서 마이그레이션을 실행합니다. 실행 전에 더 작은 데이터가 있는 폴더에서 시작 `/content/dam`.

1. 선택 **보고서 다운로드** 마이그레이션이 실행되는 동안 폴더의 모든 파일이 올바르게 업그레이드되었는지 여부와 해당 폴더에만 모든 기능이 작동하는지 여부를 확인합니다.


>[!NOTE]
>
> 콘텐츠 마이그레이션은 폴더 수준에서 완료할 수 있습니다. `/content/dam`, 또는 동일한 폴더(마이그레이션 다시 실행)입니다.

또한 DITA 콘텐츠에 사용한 이미지 및 그래픽과 같은 모든 미디어 에셋에 대해 콘텐츠 마이그레이션이 수행되었는지 확인해야 합니다.

#### 기준선 및 마이그레이션 검토

선택 **기준선/검토 업그레이드** 왼쪽 패널에서 기준선을 마이그레이션하고 폴더 수준에서 검토합니다.

![마이그레이션의 기준선 및 검토 탭](assets/migration-baseline-review-upgrade.png){width="800" align="left"}


### 3단계: 구성 복원

서버를 성공적으로 마이그레이션한 후 사후 처리, 태깅 및 다음 워크플로(마이그레이션 도중 처음에 비활성화되었던 다른 모든 워크플로 포함)를 활성화하여 서버에서 계속 작업할 수 있습니다.

* DAM 자산 업데이트 워크플로우
* DAM 메타데이터 워크플로우

>[!NOTE]
>
>일부 파일이 마이그레이션 전에 처리되지 않거나 손상된 경우 마이그레이션 전에 손상되고 마이그레이션 후에도 손상된 상태로 유지됩니다.

## 마이그레이션 유효성 검사

1. 마이그레이션이 완료되면 다음을 선택합니다. **시스템 업그레이드 유효성 검사** 마이그레이션 전후에 왼쪽 패널에서 출력 파일의 유효성을 검사하여 마이그레이션이 성공했는지 확인합니다.

   ![마이그레이션의 시스템 업그레이드 탭 유효성 검사](assets/migration-validate-system-upgrade.png){width="800" align="left"}


1. 유효성 검사가 완료되면 압축을 실행하여 대부분의 디스크 공간을 회수할 수 있습니다( 참조) `https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=en`).

