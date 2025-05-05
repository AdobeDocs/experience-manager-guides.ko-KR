---
title: 사용자 인터페이스에서 버전이 있는 비 UUID 콘텐츠를 UUID 콘텐츠로 변환
description: 4.3.x 버전으로 UUID가 아닌 콘텐츠를 마이그레이션하는 방법에 대해 알아봅니다.
source-git-commit: f18c19eb493cd4d2003f68b082e71ebe7b3e6b7a
workflow-type: tm+mt
source-wordcount: '688'
ht-degree: 0%

---

# 사용자 인터페이스의 버전으로 비 UUID 콘텐츠 마이그레이션

버전 4.3.x 이상을 사용 중인 경우 다음 단계를 수행하여 버전이 포함된 UUID가 아닌 콘텐츠를 UUID 콘텐츠로 마이그레이션합니다.

## 호환성 매트릭스

| 현재 AEM Guides 버전(UUID 아님) | UUID로 마이그레이션하는 데 필요한 버전 | 지원되는 업그레이드 경로 |
|---|---|---|
| 4.3.x 이상 | 4.3.0 비 UUID | 4.3.1(UUID) 설치 |

## 필수 패키지

1. **버전 제거**: `com.adobe.guides.version-purge-1.0.11.zip`(선택 사항)
1. **마이그레이션 전**: `com.adobe.guides.pre-uuid-migration-1.1.2 .zip`
1. **마이그레이션**: `com.adobe.guides.uuid-upgrade-1.1.13.zip`



## 마이그레이션 전

1. (선택 사항) 콘텐츠에 대해 버전 지우기를 수행하여 불필요한 버전을 제거하고 마이그레이션 프로세스를 가속화합니다. 버전 4.1(4.0에서는 지원되지 않음)에서 버전 삭제를 수행하려면 패키지 `com.adobe.guides.version-purge-1.0.11.zip`을(를) 설치하고 이 URL `http://<server-name> /libs/fmdita/clientlibs/xmleditor_version_purge/page.html`을(를) 사용하여 사용자 인터페이스로 이동하십시오.

   >[!NOTE]
   >
   >이 유틸리티는 기준선 또는 검토에 사용된 버전을 제거하지 않으며 레이블이 없습니다.
1. 마이그레이션 전 패키지(`ccom.adobe.guides.pre-uuid-migration-1.1.2 .zip`)를 설치합니다.

   >[!NOTE]
   >
   >* 마이그레이션을 실행하려면 관리자 권한이 필요합니다.
   >* 마이그레이션을 계속하기 전에 오류가 있는 파일을 수정하는 것이 좋습니다.

1. 왼쪽 패널에서 **호환성 평가**&#x200B;를 선택하고 폴더 경로를 찾습니다.
1. 다음 정보를 나열하려면 호환성을 확인하십시오.
   * 총 파일 수
   * 총 버전
   * 예상 마이그레이션 시간
   * 오류가 발생한 파일 수



![마이그레이션의 호환성 평가 탭](assets/migration-compatibility-assessment.png){width="800" align="left"}


1. 왼쪽 패널에서 **유효성 검사 구성**&#x200B;을 선택합니다. 그런 다음 맵의 **맵을 선택**&#x200B;하고 **사전 설정을 선택**&#x200B;하여 구성하십시오. 현재 출력 유효성 검사 목록에는 마이그레이션 전에 존재하는 출력 파일이 표시되며, 나중에 마이그레이션 후에 생성된 출력 파일에 대해 유효성 검사를 수행할 수 있습니다.

![마이그레이션에서 유효성 검사 탭 구성](assets/migration-configure-validation.png){width="800" align="left"}




## 마이그레이션

### 1단계: 구성 업데이트

1. 마이그레이션 중에 사용 가능한 공간이 AEM(crx-quickstart 디렉터리)에서 사용하는 공간의 10배 이상인지 확인하십시오. 마이그레이션을 완료하면 압축을 실행하여 대부분의 디스크 공간을 다시 확보할 수 있습니다([수정 정리](https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=ko) 참조).

1. `com.adobe.fmdita.config.ConfigManager`에서 *Post 처리 워크플로 시작 활성화* 및 `com.adobe.fmdita.postprocess.version.PostProcessVersionObservation.`에서 *버전 사후 처리 활성화* 활성화

1. 지원되는 릴리스의 UUID 버전을 UUID가 아닌 버전에 설치합니다. 예를 들어 4.0 비 UUID 빌드 또는 4.1 비 UUID 빌드를 사용하는 경우 UUID 버전 4.1을 설치해야 합니다.

1. UUID 마이그레이션(`com.adobe.guides.uuid-upgrade-1.1.13`)을 위한 새 패키지를 설치합니다.

1. 다음 워크플로 및 `http://localhost:4502/libs/cq/workflow/content/console.html`에서 런처를 사용하여 `/content/dam`에서 실행되는 다른 워크플로를 비활성화하십시오.

   * DAM 자산 업데이트 워크플로우
   * DAM 메타데이터 원본에 쓰기 워크플로우

1. `com.adobe.fmdita.config.ConfigManager`에서 *Post 처리 워크플로 시작 관리자를 활성화*&#x200B;하고 `com.adobe.fmdita.postprocess.version.PostProcessVersionObservation`에서 *버전 사후 처리 기능을 활성화*&#x200B;합니다.

1. 일별 CQ 태그 지정 서비스에서 유효성 검사 사용(`validation.enabled`) 속성을 사용하지 않도록 설정합니다.

1. `com.adobe.fmdita.config.ConfigManager`에서 `uuid.regex` 속성 폴더가 제대로 설정되어 있는지 확인하십시오. 비어 있는 경우 기본값 `^GUID-(?<id>.*)`(으)로 설정합니다.
1. `com.adobe.fmdita.uuid.upgrade.UuidUpgrade`에 대해 별도의 로거를 추가합니다. 브라우저 응답은 `/content/uuid-upgrade/logs`에서도 사용할 수 있습니다.

### 2단계: 마이그레이션 실행 및 유효성 검사

#### 마이그레이션 패키지 설치

![마이그레이션의 시스템 업그레이드 탭](assets/migration-system-upgrade.png){width="800" align="left"}

* 마이그레이션을 실행하려면 왼쪽 패널에서 **시스템 업그레이드**&#x200B;를 선택하십시오. `/content/dam`에서 실행하기 전에 더 작은 데이터가 있는 폴더에서 시작하십시오.

* 마이그레이션이 실행되는 동안 **보고서 다운로드**&#x200B;를 선택하여 폴더의 모든 파일이 올바르게 업그레이드되었는지 여부와 해당 폴더에만 모든 기능이 작동하는지 확인합니다.


>[!NOTE]
>
> 콘텐츠 마이그레이션은 폴더 수준 또는 전체 `/content/dam` 또는 동일한 폴더에서 실행할 수 있습니다(마이그레이션 다시 실행).

또한 콘텐츠 마이그레이션이 DITA 콘텐츠에서 사용한 이미지 및 그래픽과 같은 모든 미디어 에셋에 대해서도 수행되는지 확인하는 것이 중요합니다.

#### 기준선 및 마이그레이션 검토

왼쪽 패널에서 **기준선/검토 업그레이드**&#x200B;를 선택하여 기준선을 마이그레이션하고 폴더 수준에서 검토합니다.

![마이그레이션의 기준선 및 검토 탭](assets/migration-baseline-review-upgrade.png){width="800" align="left"}


### 3단계: 구성 복원

서버가 성공적으로 마이그레이션되면 사후 처리, 태그 지정 및 다음 워크플로(마이그레이션 도중 초기에 비활성화된 다른 모든 워크플로 포함)를 활성화하여 서버에서 계속 작업할 수 있습니다.

* DAM 자산 업데이트 워크플로우
* DAM 메타데이터 워크플로우

>[!NOTE]
>
>일부 파일이 처리되지 않거나 마이그레이션 전에 손상되어 마이그레이션 전에 손상되고 마이그레이션 후에도 손상된 상태를 유지합니다.

## 마이그레이션 유효성 검사

마이그레이션이 완료되면 왼쪽 패널에서 **시스템 업그레이드 유효성 검사**&#x200B;를 선택하고 마이그레이션 전후에 출력 파일의 유효성을 검사하여 마이그레이션이 성공적으로 이루어지도록 하십시오.

![마이그레이션의 시스템 업그레이드 탭 유효성 검사](assets/migration-validate-system-upgrade.png){width="800" align="left"}


1. 마이그레이션이 완료되면 압축을 실행하여 대부분의 디스크 공간을 확보할 수 있습니다(`https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=ko` 참조).

