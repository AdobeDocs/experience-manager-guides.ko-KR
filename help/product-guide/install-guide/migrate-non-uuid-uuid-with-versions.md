---
title: 버전이 있는 비 UUID 콘텐츠를 UUID 콘텐츠로 변환
description: 버전을 사용하여 UUID가 아닌 콘텐츠를 마이그레이션하는 방법에 대해 알아봅니다.
exl-id: 9387e0d1-906c-4e5c-a7a0-0ed1600f5eb6
source-git-commit: 5e0584f1bf0216b8b00f00b9fe46fa682c244e08
workflow-type: tm+mt
source-wordcount: '1287'
ht-degree: 1%

---

# 버전을 사용하여 UUID가 아닌 콘텐츠 마이그레이션

다음 단계를 수행하여 버전이 있는 UUID가 아닌 콘텐츠를 UUID 콘텐츠로 마이그레이션합니다.

## 호환성 매트릭스

| 현재 AEM Guides 버전(UUID 아님) | UUID로 마이그레이션하는 데 필요한 버전 | 지원되는 업그레이드 경로 |
|---|---|---|
| 3.8.5 | 4.0 비 UUID | UUID(4.1) 를 설치하고 마이그레이션을 실행합니다 |
| 4.0, 4.0.x, 4.1 또는 4.1.x | 현재 비 UUID와 동일 | UUID(4.1) 를 설치하고 마이그레이션을 실행합니다 |
| 4.2 이상 | NA | 아직 지원되지 않음 |

## 필수 패키지

1. **버전 삭제**: `com.adobe.guides.version-purge-1.0.11.zip` (선택 사항)
1. **마이그레이션 전**: `com.adobe.guides.pre-uuid-migration-1.0.7.zip`
1. **마이그레이션**: `com.adobe.guides.uuid-upgrade-1.0.17`
1. **마이그레이션 후**: `com.adobe.guides.post-uuid-migration-1.0.2.zip`


## 마이그레이션 전

1. (선택 사항) 콘텐츠에 대해 버전 지우기를 수행하여 불필요한 버전을 제거하고 마이그레이션 프로세스를 가속화합니다. 버전 4.1(4.0에서는 지원되지 않음)에서 버전 삭제를 수행하려면 패키지를 설치하십시오 `com.adobe.guides.version-purge-1.0.11.zip`을 클릭하고 이 URL을 사용하여 사용자 인터페이스로 이동합니다 `http://<server-name> /libs/fmdita/clientlibs/xmleditor_version_purge/page.html`.

   >[!NOTE]
   >
   >이 유틸리티는 기준선 또는 검토에 사용된 버전을 제거하지 않으며 레이블이 없습니다.
1. 마이그레이션 전 패키지 설치(`com.adobe.guides.pre-uuid-migration-1.0.7.zip`).

1. 아래 쿼리를 실행하여 마이그레이션에 걸리는 예상 시간(ETA)이 포함된 보고서를 가져오고 마이그레이션되지 않을 콘텐츠 문제가 있는 파일이 있는 경우 보고합니다.

>[!NOTE]
>
>마이그레이션을 실행하려면 관리자 권한이 필요합니다.


| 끝점 URL | 요청 유형 | 쿼리 매개 변수 | 예상 결과 |
|---|---|---|---|
| `/bin/guides/pre_uuid_upgrade` <br> <br>**예**: http://localhost:4502/bin/guides/pre_uuid_upgrade?root=/content/dam | GET | **루트**: 루트 폴더<br> **값**: `/content/dam` 전체 저장소용입니다. | 마이그레이션 전 보고서(.csv)가 만들어지고 파일 수, 총 버전 및 오류가 표시됩니다. <br><br> **샘플 출력**:<br>루트 폴더: /content/dam <br>총 파일 수: 2697 <br>총 버전: 10380 <br>오류가 발생한 파일 수: 28 <br>자세한 보고서는 AEM CRX를 통해 다음 위치에서 사용할 수 있습니다. `/content/uuid-pgrade/UuidMigrationReport_1688400131039.csv` |

시스템에 DITA 파일이 많으면 이 단계가 실패할 수 있습니다. 이 문제를 해결하려면 값을 늘려 쿼리에서 트래버스되는 파일 수의 제한을 늘립니다. *메모리 내 읽기 제한(queryLimitReads)* apache Jackrabbit Query Engine 설정 서비스에서 시스템100000 있는 총 DITA 에셋 수보다 큰 수를 반환합니다.

## 마이그레이션

### 1단계: 구성 업데이트

1. 마이그레이션 중에 사용 가능한 공간이 AEM(crx-quickstart 디렉터리)에서 사용하는 공간의 10배 이상인지 확인하십시오. 마이그레이션을 완료하면 압축을 실행하여 대부분의 디스크 공간을 다시 확보할 수 있습니다( 참조). [개정 정리](https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=en)).

1. 사용 *사후 처리 워크플로 런처 활성화* 위치: `com.adobe.fmdita.config.ConfigManager` 및 *버전 사후 처리 활성화* 위치: `com.adobe.fmdita.postprocess.version.PostProcessVersionObservation.`

1. 지원되는 릴리스의 UUID 버전을 UUID가 아닌 버전에 설치합니다. 예를 들어 4.0 비 UUID 빌드 또는 4.1 비 UUID 빌드를 사용하는 경우 UUID 버전 4.1을 설치해야 합니다.

1. UUID 마이그레이션을 위한 새 패키지 설치(`com.adobe.guides.uuid-upgrade-1.0.17`).

1. 다음 워크플로우 및 다음에 실행되는 다른 워크플로우 비활성화 `/content/dam` 에서 런처 사용 `http://localhost:4502/libs/cq/workflow/content/console.html`.

   * DAM 자산 업데이트 워크플로우
   * DAM 메타데이터 원본에 쓰기 워크플로우

1. 사용 안 함 *사후 처리 워크플로 런처 활성화* 위치: `com.adobe.fmdita.config.ConfigManager` 및 비활성화 *버전 사후 처리 활성화* 위치: `com.adobe.fmdita.postprocess.version.PostProcessVersionObservation`.

1. 속성 비활성화 유효성 검사 활성화(`validation.enabled`)를 클릭하여 제품에서 사용할 수 있습니다.

1. 다음을 확인합니다. `uuid.regex` 속성 폴더가에서 제대로 설정됨 `com.adobe.fmdita.config.ConfigManager`. 비어 있는 경우 기본값으로 설정합니다. `^GUID-(?<id>.*)`.
1. 다음에 대한 별도의 로거 추가 `com.adobe.fmdita.uuid.upgrade.UuidUpgrade` 브라우저 응답은에서 사용할 수도 있습니다. `/content/uuid-upgrade/logs`.

### 2단계: 스크립트 실행 및 유효성 검사

실행 시기 전에 더 작은 데이터가 있는 폴더에서 해당 쿼리 실행 `/content/dam`.

>[!TIP]
>
>폴더의 모든 파일이 제대로 업그레이드되었는지 여부와 해당 폴더에만 모든 기능이 작동하는지 여부를 확인할 수 있습니다.

| 끝점 URL | 요청 유형 | 쿼리 매개 변수 | 예상 결과 |
|---|---|---|---|
| `/bin/guides/uuid_upgrade`<br><br> **예**: `http://localhost:4502/bin/guides/uuid_upgrade?root=/content/dam/test` | GET | **루트**: 루트 폴더 <br>**값**: 전체 저장소용 /content/dam.<br><br>**무시 이미지 버전**<br> **값**: true/false(이미지 버전 처리를 무시합니다. 기본값은 false입니다. | 파일 목록이 있는 마이그레이션 보고서가 마이그레이션되었습니다. 업그레이드하지 못했습니다. 업그레이드했지만 오류가 발생했습니다. 총 소요 시간이 있습니다. <br><br> **샘플 출력**: <br> [정보] 파일 목록 실패:0 <br>[정보] 아니. 개 중 개 파일 업그레이드 성공: 2241 <br>[정보] 아니. 개 중 개 파일이 오류와 함께 업그레이드됨: 28 <br>[정보] 아니. 개 중 개 파일 업그레이드 실패: 0 <br> [정보] 총 소요 시간: 0:37:03.131 |

>[!NOTE]
>
> 콘텐츠 마이그레이션은 폴더 수준 또는 전체 수준에서 실행할 수 있습니다. `/content/dam` 또는 동일한 폴더(마이그레이션 다시 실행)에서 실행할 수 있습니다.

또한 콘텐츠 마이그레이션이 DITA 콘텐츠에서 사용한 이미지 및 그래픽과 같은 모든 미디어 에셋에 대해서도 수행되는지 확인하는 것이 중요합니다.

#### 기준 마이그레이션

이미 마이그레이션한 폴더에서 쿼리를 실행하여 해당 폴더의 기준선을 마이그레이션합니다.

| 끝점 URL | 요청 유형 | 쿼리 매개 변수 | 예상 결과 |
|---|---|---|---|
| `/bin/guides/baseline_uuid_upgrade`<br><br> **예**: ` http://localhost:4502/bin/guides/baseline_uuid_upgrade?root=/content/dam/test` | GET | **루트**: 루트 폴더 <br> **값**: 전체 저장소용 /content/dam. <br><br> **무시 이미지 버전**<br> **값**: true/false <br>이미지 버전 처리를 무시합니다. 기본값은 false입니다. <br><br> **doReview** <br> **값**: true/false <br> (리뷰를 업그레이드해야 하거나 업그레이드하지 말아야 하는 경우). 기본값은 false입니다.) 파일 목록이 있는 마이그레이션 보고서가 마이그레이션되었습니다. 업그레이드하지 못했습니다. 업그레이드했지만 오류가 발생했습니다. 총 소요 시간이 있습니다. <br> <br> **샘플 출력**:<br>[정보] 파일 목록 실패 <br> [정보] 아니. 개 중 개 파일이 2241로 업그레이드됨<br> [정보] 아니. 개 중 개 파일이 오류와 함께 업그레이드됨 28<br>[정보] 아니. 개 중 개의 파일이 업그레이드되지 않음<br>[정보] 총 소요 시간: 0:37:03.131 |


### 3단계: 구성 복원

서버가 성공적으로 마이그레이션되면 사후 처리, 태그 지정 및 다음 워크플로(마이그레이션 도중 초기에 비활성화된 다른 모든 워크플로 포함)를 활성화하여 서버에서 계속 작업할 수 있습니다.

* DAM 자산 업데이트 워크플로우
* DAM 메타데이터 워크플로우

>[!NOTE]
>
>일부 파일이 처리되지 않거나 마이그레이션 전에 손상되어 마이그레이션 전에 손상되고 마이그레이션 후에도 손상된 상태를 유지합니다.

## 마이그레이션 유효성 검사

1. UUID 마이그레이션 후 패키지 설치(`com.adobe.guides.post-uuid-migration-1.0.2.zip`).

1. 다음 쿼리를 실행하여 마이그레이션 도중 링크가 끊어지지 않은 오류가 없는지 확인합니다. 이 스크립트는 이전에 끊어진 적이 없지만 어떤 이유로든 현재 끊어진 링크가 있는지 식별합니다.

   | 끝점 URL | 요청 유형 | 쿼리 매개 변수 | 예상 결과 |
   |---|---|---|---|
   | `/bin/guides/get_broken_links` <br> <br> **예**:<br>`http://localhost:4502/bin/guides/get_broken_links` | GET | NA | UUID가 끊어진 총 파일 수와 해당 파일 경로가 포함된 마이그레이션 보고서. <br> <br> **샘플 출력**:<br>[디버그] 콘텐츠에서 이러한 GUID가 모두 사용되는지 확인하고 있습니다.<br>[디버그] 손상된 UUID가 있을 수 있는 총 파일 수: 0 <br>[디버그] UUID가 손상되었을 수 있는 경로:0 |

1. 마이그레이션이 완료되면 압축을 실행하여 대부분의 디스크 공간을 확보할 수 있습니다( 참조). `https://experienceleague.adobe.com/docs/experience-manager-65/deploying/deploying/revision-cleanup.html?lang=en`).

## 델타 컨텐츠 마이그레이션

1. 델타 컨텐츠를 활성 서버(비 UUID)에서 현재 UUID 서버로 마이그레이션하려면 비 UUID 서버에 마이그레이션 전 스크립트를 설치합니다.

1. 전체 데이터 세트(또는 하위 폴더)에 대해 다음 쿼리를 실행하여 지정된 타임스탬프 후에 수정된 모든 파일을 식별하고 내보냅니다. 타임스탬프는 날짜 및 시간( YYYY-MM-DDTHH)에 대해 ISO8601 형식을 사용합니다:mm:YYYY-MM-DD와 같은 부분 표현도 사용할 수 있습니다.

   | 끝점 URL | 요청 유형 | 쿼리 매개 변수 | 예상 결과 |
   |---|---|---|---|
   | `/bin/guides/data_export`<br><br>**예**: <br> `http://localhost:4502/bin/guides/data_export?timestamp=2023-07-11&root=/content/dam` | GET | **timestamp** <br> **값**: YYYY-MM-DD<br><br> **루트**: 루트 폴더 <br> **값**: `/content/dam` 전체 저장소용입니다. | 델타 컨텐츠가 있는 zip 파일이 /var/dxml/exports에 생성됩니다. <br> <br>**샘플**: dataexport_1689761491218.zip (파일이 생성됨) |

1. 스크립트로 내보낸 zip 파일을 다운로드합니다. 응답의 마지막 행은 생성된 zip 파일의 경로(시스템의 /var/dxml/exports에 저장됨)를 제공해야 합니다.

1. Assets UI의 원하는 경로에서 zip 파일을 uuid 서버에 업로드합니다.

1. 마이그레이션 후 패키지가 UUID 서버에 설치되었는지 확인합니다.

1. 다음 주어진 쿼리를 실행하여 업로드된 zip 파일에서 시스템으로 델타 컨텐츠를 가져옵니다. 데이터를 제대로 식별하고 처리하려면 쿼리에 업로드된 zip 파일의 경로가 포함되어야 합니다.

   | 끝점 URL | 요청 유형 | 쿼리 매개 변수 | 예상 결과 |
   |---|---|---|---|
   | `/bin/guides/data_import`<br> **예**:`http://localhost:4502/bin/guides/data_import?path=/content/dam/dataexport_1689344927551.zip&createVersion=true` | POST | **path**<br> **값**: `/content/dam/filename.zip`(업로드된 파일 위치) **createVersion** <br> **값**: true/false<br>createVersion의 기본값은 false입니다. | 파일이 원하는 콘텐츠 경로로 업로드됩니다.<br><br>**샘플**: `dataexport_1689761491218.zip`<br><br> 이전 단계에서 내보낸 동일한 파일은에서 원하는 경로로 업로드됩니다. `/content/dam`). |

1. 존재하지 않는 경우 스크립트는 새 파일을 생성하고 수정된 경우 기존 파일을 재정의합니다.

>[!NOTE]
>
> 버전 기록 및 서버에서 수행된 다른 모든 변경 사항(예: 워크플로우 및 검토 )은 수동으로 업데이트해야 합니다.
